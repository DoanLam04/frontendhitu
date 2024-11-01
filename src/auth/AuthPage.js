import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function AuthPage() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="pt-28 flex flex-col md:flex-row justify-between mt-10 px-8 font-sans">
      <div className="w-full md:w-3/5 mb-8 md:mb-0">
        {/* Announcement Section */}
        <div className="w-full md:w-3/5 mb-8 md:mb-0">
          <h3 className="mb-5 text-xl font-bold">Thông báo</h3>
          <ul>
            <li className="flex mb-6">
              <div className="bg-blue-600 text-white text-center p-2 w-16 h-16 flex flex-col justify-center">
                <span>Tháng 10</span>
                <span>15</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">
                  THÔNG BÁO KHÁM SỨC KHỎE KHÓA 2024
                </h4>
                <p className="text-gray-600">
                  Phòng CTSV thông báo đến tân sinh viên K48...
                </p>
              </div>
            </li>
            <li className="flex mb-6">
              <div className="bg-blue-600 text-white text-center p-2 w-16 h-16 flex flex-col justify-center">
                <span>Tháng 09</span>
                <span>29</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">
                  THÔNG BÁO ĐĂNG KÝ HỌC BỔNG "HAN TEAM SCHOLARSHIP"
                </h4>
                <p className="text-gray-600">
                  Thông tin liên hệ: CÔNG TY CỔ PHẦN...
                </p>
              </div>
            </li>
            <li className="flex mb-6">
              <div className="bg-blue-600 text-white text-center p-2 w-16 h-16 flex flex-col justify-center">
                <span>Tháng 09</span>
                <span>28</span>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">
                  THÔNG BÁO CÔNG BỐ KẾT QUẢ
                </h4>
                <p className="text-gray-600">
                  Thông báo về sơ bộ kết quả rèn luyện...
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {isRegistering ? (
        <Register setIsRegistering={setIsRegistering} />
      ) : (
        <Login setIsRegistering={setIsRegistering} />
      )}
    </div>
  );
}
