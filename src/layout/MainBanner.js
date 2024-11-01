import React, { useEffect, useState } from "react";
import axios from "axios";
import AppUrl from "../api/ApiUrl";
import { useNavigate } from "react-router-dom";
const MainBanner = () => {
  // State for event data and loading status
  const [events, setEvents] = useState([]); // Changed to an array to hold all events
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to hold any error messages
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleNavigate = (eventId) => {
    navigate("/qr-reader", { state: { eventId } }); // Pass event id to QR reader
  };
  // Fetch event data from API using useEffect
  useEffect(() => {
    if (token) {
      const fetchEvents = async () => {
        const response = await axios.get(`${AppUrl.URL}/public/events/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        //console.log("Response:", response.data);
        setEvents(response.data); // Set all event data
        setError("Error fetching events. Please try again later."); // Set error message
        setLoading(false); // Ensure loading is set to false in both success and error cases
      };
      fetchEvents();
    }
  }, []); // Empty dependency array to call useEffect once when the component mounts

  //   if (loading) {
  //     return <p>Loading...</p>; // Show a loading state while fetching data
  //   }

  //   if (error) {
  //     return <p>{error}</p>; // Display error message if there's an error
  //   }

  return (
    <div className="relative mb-8 px-2">
      {/* Banner Image */}
      <img
        src="https://mtvn-s3.a2t.vn/2024/01/24/03/8c67288b-a2d2-43eb-9861-1b0c3b162f16_chuctet1_2-min.jpg"
        alt="Main Banner"
        className="w-100 h-52 rounded-lg"
      />
      {/* Banner Content */}
      <h2 className="text-lg font-bold text-blue-500 mt-4">
        MUÔN VÀN KIỂU CHÚC TẾT ĐẾN TỪ VỊ TRÍ GEN Z
      </h2>
      <p className="mt-2">
        Một mùa Tết nữa lại sắp đến, Tết đến là dịp gia đình vui vầy sum họp,
        trao cho nhau nụ cười và những lời chúc tụng, mừng tuổi để bày tỏ lòng
        hiếu thảo, tình thương yêu của mọi người trong gia đình. “Mang Tết về
        nhà” xin mách bạn một số câu chúc vui nhộn bỏ túi ngay để nhận lì xì
        liền tay.
      </p>
      {/* Event Information Section */}
      {events.length === 0 && (
        <div className="mt-6 bg-yellow-100 p-4 rounded-lg shadow-md">
          <p className="text-yellow-700">No events available.</p>
        </div>
      )}

      {events.map((event) => (
        <div
          key={event.id}
          className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold text-indigo-600">
            Sự Kiện: {event.name} {/* Display event name */}
          </h3>
          <p className="mt-2 text-gray-700">
            Thời gian: {new Date(event.dateTime).toLocaleString()}{" "}
            {/* Display event time */}
          </p>

          {/* Join Button */}

          <button
            className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition-colors"
            onClick={() => handleNavigate(event.id)} // Pass event ID
          >
            Nhấp để tham gia hoạt động
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainBanner;
