import React, { useState } from "react";
import axios from "axios";
import AppUrl from "../api/ApiUrl";
import LoadingLogin from "../component/LoadingLogin";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login({ setIsRegistering }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${AppUrl.URL}/login`, {
        email: email,
        password: password,
      });

      const token = response.data["jwt-token"];
      localStorage.setItem("token", token);

      if (token) {
        try {
          const user = await axios.get(
            `${AppUrl.URL}/public/users/email/${email}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          localStorage.setItem("userId", user.data.userId);
        } catch (error) {
          console.log(error);
        }
      }
      toast.success("Đăng nhập thành công");
      navigate("/");
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-2/5 bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-6">Đăng nhập hệ thống</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Mật khẩu
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          {loading ? <LoadingLogin /> : "Đăng nhập"}
        </button>
      </form>
      <div className="mt-6 text-center">
        <button
          onClick={() => setIsRegistering(true)}
          className="text-blue-600 hover:underline block mb-2"
        >
          Chưa có tài khoản? Đăng ký
        </button>
        <a href="#" className="text-blue-600 hover:underline block mb-2">
          Quên mật khẩu?
        </a>
      </div>
    </div>
  );
}
