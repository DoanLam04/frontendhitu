import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppUrl from "../api/ApiUrl";

export default function Loading() {
  const location = useLocation();
  const navigate = useNavigate();
  const { scannedResult, eventId } = location.state || {};
  const [loading, setLoading] = useState(true);
  const hasSubmitted = useRef(false);

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  // API call to submit scanned result
  const handleSubmit = async () => {
    if (!scannedResult || hasSubmitted.current) return;

    hasSubmitted.current = true;
    setLoading(true);

    const url = `${AppUrl.URL}/public/userId/${userId}/events/${eventId}?token=${scannedResult}`;

    try {
      const response = await axios.post(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success(`${response.data.message}`);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.warning(`${error.response.data.message}`);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => navigate("/"), 500); // Smoothly navigate after 500ms delay
    }
  }, [loading, navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      {loading ? (
        <div
          className="flex flex-col items-center animate-fadeIn duration-500"
          style={{ animationDuration: "0.5s" }}
        >
          <img
            src="../../img/loadinglogin.gif"
            alt="Loading..."
            className="w-16 h-16 animate-spin transition-all duration-500"
          />
          <p className="text-gray-200 mt-4 opacity-75 text-sm transition-opacity duration-500">
            Please wait...
          </p>
        </div>
      ) : (
        <p className="text-white animate-fadeIn duration-500">
          Loading complete!
        </p>
      )}
    </div>
  );
}
