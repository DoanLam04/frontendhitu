import React from "react";
import News from "../pages/News";

const companyInfo = {
  name: "CÔNG TY TNHH PHẦN MỀM NHÂN HÒA",
  address:
    "Tầng 4, Tòa nhà số 97 - 99 Láng Hạ, Đống Đa, Hà Nội (Tòa nhà Petrowaco)",
  phone: "1900 6680 - 0901191616",
  email: "contact@sm4s.vn",
  socialLinks: ["Facebook", "Google+", "Instagram", "YouTube"],
};

const links = [
  {
    title: "LIÊN KẾT",
    items: [
      "Trang chủ",
      "Giới thiệu",
      "Sản phẩm",
      "Tin tức",
      "Thư viện",
      "Liên hệ",
    ],
  },
  {
    title: "CHÍNH SÁCH",
    items: [
      "Hướng dẫn mua hàng",
      "Hướng dẫn đổi trả hàng",
      "Hướng dẫn thanh toán",
      "Chính sách giao hàng",
      "Chính sách bảo mật",
      "Chính sách khuyến mại",
    ],
  },
];

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          {/* Company Info Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold">{companyInfo.name}</h2>
            <p>Địa chỉ: {companyInfo.address}</p>
            <p>Điện thoại: {companyInfo.phone}</p>
            <p>Email: {companyInfo.email}</p>
            <div className="flex space-x-4 mt-2">
              {companyInfo.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          {/* Links Section */}
          {links.map((linkGroup, index) => (
            <div key={index} className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold">{linkGroup.title}</h3>
              <ul>
                {linkGroup.items.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Facebook Fanpage Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold">FANPAGE FACEBOOK</h3>
            <div className="bg-gray-700 p-4 rounded">
              <p className="font-bold">Web4s.vn</p>
              <p>9,1K người theo dõi</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
