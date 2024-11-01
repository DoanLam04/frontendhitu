import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import QrFrame from "../assets/img/qr-frame.png";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import AppUrl from "../api/ApiUrl";
import { toast } from "react-toastify";

export default function QrReader() {
  const scanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [qrOn, setQrOn] = useState(false); // Initially false to prevent camera activation
  const [scannedResult, setScannedResult] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [event, setEvent] = useState(null);
  const [scanComplete, setScanComplete] = useState(false);
  const eventId = location.state?.eventId;

  // Fetch event by ID
  const fetchEvent = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${AppUrl.URL}/public/events/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEvent(response.data);
    } catch (error) {
      console.error("Error fetching event data:", error);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [eventId]);
  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });

            if (event) {
              const distance = calculateDistance(
                latitude,
                longitude,
                event.latitude,
                event.longitude
              );

              if (distance <= event.distance) {
                setQrOn(true);
              } else {
                toast.warning("Bạn không nằm trong khuôn viên hoạt động.");
                setQrOn(false);
                navigate("/");
              }
            }
          },
          (error) => {
            console.error("Error getting user location:", error);
            toast.error(
              "Không thể lấy vị trí. Vui lòng cho phép quyền truy cập vị trí."
            );
            setQrOn(false);
          }
        );
      } else {
        toast.error("Trình duyệt của bạn không hỗ trợ lấy vị trí.");
        setQrOn(false);
      }
    };

    getUserLocation();
  }, [event, qrOn]);

  // Haversine formula for distance calculation
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degree) => (degree * Math.PI) / 180;
    const R = 6371; // Earth's radius in km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c * 1000; // Convert to meters
  };

  // Handle QR scan success
  const onScanSuccess = (result) => {
    if (!scanComplete) {
      setScannedResult(result?.data);
      setScanComplete(true);
      navigate("/loading", {
        state: { scannedResult: result?.data, eventId: eventId },
      });
    }
  };

  const onScanFail = (err) => {
    console.log("Scan failed:", err);
  };

  // Initialize the QR scanner if `qrOn` is true and userLocation is available
  useEffect(() => {
    if (qrOn && videoEl.current && !scanner.current) {
      scanner.current = new QrScanner(videoEl.current, onScanSuccess, {
        onDecodeError: onScanFail,
        preferredCamera: "environment",
        highlightScanRegion: true,
        highlightCodeOutline: true,
        overlay: qrBoxEl.current || undefined,
      });

      scanner.current.start().catch((err) => {
        console.error("Error starting QR scanner:", err);
        setQrOn(false);
      });
    } else if (!qrOn && scanner.current) {
      scanner.current.stop();
      scanner.current = null;
    }
  }, [qrOn]);

  useEffect(() => {
    if (!qrOn) {
      alert("Không thể bật camera. Vui lòng cấp quyền vị trí và thử lại.");
    }
  }, [qrOn]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="relative w-full max-w-sm aspect-[9/16]">
        <video
          ref={videoEl}
          className="w-full h-full rounded-lg shadow-lg object-cover"
        ></video>
        <div
          ref={qrBoxEl}
          className="absolute inset-0 flex justify-center items-center"
        >
          <img src={QrFrame} alt="QR Frame" className="w-48 h-48" />
        </div>
      </div>
    </div>
  );
}
