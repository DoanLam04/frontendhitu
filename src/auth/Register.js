import React, { useEffect, useState } from "react";
import axios from "axios";
import AppUrl from "../api/ApiUrl";
import { toast } from "react-toastify";
import LoadingLogin from "../component/LoadingLogin";
import { useForm } from "react-hook-form";

export default function Register({ setIsRegistering }) {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getFaculties = async () => {
      try {
        const response = await axios.get(`${AppUrl.URL}/public/faculties`);
        setFaculties(response.data);
      } catch (error) {
        console.error("Error fetching faculties", error);
      }
    };
    getFaculties();
  }, []);

  const handleRegister = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${AppUrl.URL}/register`, data);
      toast.success("Đăng ký thành công");
      setIsRegistering(false);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-2/5 bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-6">Đăng ký tài khoản</h3>
      <form onSubmit={handleSubmit(handleRegister)}>
        {/* Last Name */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Họ
          </label>
          <input
            {...register("lastName", {
              required: "Họ là bắt buộc",
              minLength: {
                value: 3,
                message: "Họ phải có ít nhất 3 ký tự",
              },
            })}
            type="text"
            placeholder="Nhập họ"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        {/* First Name */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Tên
          </label>
          <input
            {...register("firstName", {
              required: "Tên là bắt buộc",
              minLength: {
                value: 3,
                message: "Tên phải có ít nhất 3 ký tự",
              },
            })}
            type="text"
            placeholder="Nhập tên"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Số điện thoại
          </label>
          <input
            {...register("mobileNumber", {
              required: "Số điện thoại là bắt buộc",
              minLength: {
                value: 10,
                message: "Số điện thoại phải có đúng 10 chữ số",
              },
              maxLength: {
                value: 10,
                message: "Số điện thoại phải có đúng 10 chữ số",
              },
            })}
            type="text"
            placeholder="Nhập số điện thoại"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.mobileNumber && (
            <p className="text-red-500 text-sm">
              {errors.mobileNumber.message}
            </p>
          )}
        </div>

        {/* MaSV */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Mã sinh viên
          </label>
          <input
            {...register("maSV", {
              required: "Mã sinh viên là bắt buộc",
              minLength: {
                value: 10,
                message: "Mã sinh viên phải có đúng 10 ký tự",
              },
              maxLength: {
                value: 10,
                message: "Mã sinh viên phải có đúng 10 ký tự",
              },
            })}
            type="text"
            placeholder="Nhập mã sinh viên"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.maSV && (
            <p className="text-red-500 text-sm">{errors.maSV.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            {...register("email", { required: "Email là bắt buộc" })}
            type="email"
            placeholder="Nhập email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Mật khẩu
          </label>
          <input
            {...register("password", { required: "Mật khẩu là bắt buộc" })}
            type="password"
            placeholder="Nhập mật khẩu"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Select Faculty */}
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Chọn Khoa
          </label>
          <select
            {...register("facultyId", { required: "Chọn khoa là bắt buộc" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={0}>Chọn khoa</option>
            {faculties.map((faculty) => (
              <option key={faculty.facultyId} value={faculty.facultyId}>
                {faculty.name}
              </option>
            ))}
          </select>
          {errors.facultyId && (
            <p className="text-red-500 text-sm">{errors.facultyId.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          {loading ? <LoadingLogin /> : "Đăng ký"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <button
          onClick={() => setIsRegistering(false)}
          className="text-blue-600 hover:underline block mb-2"
        >
          Đã có tài khoản? Đăng nhập
        </button>
      </div>
    </div>
  );
}
