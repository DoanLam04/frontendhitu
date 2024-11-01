import React, { useState, useEffect } from "react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const token = localStorage.getItem("token");

  const menuItems = [
    { id: 1, label: "TRANG CHỦ", link: "/" },
    { id: 2, label: "THÔNG TIN", link: "thongtin" },
    { id: 3, label: "TIN TỨC", link: "tintuc" },
    { id: 4, label: "Hoạt động", link: "hoatdong" },
    token
      ? { id: 5, label: "SINH VIÊN", link: "taikhoan" }
      : { id: 5, label: "Đăng Nhập", link: "auth" },
  ];

  const handleMenuClick = (label) => {
    setActiveMenu(label);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop < lastScrollTop) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      className={`flex justify-center fixed top-0 w-full shadow-lg transition-transform duration-300 ${
        scrollingUp ? "translate-y-0" : "-translate-y-full"
      } z-50 bg-white`}
    >
      <div className="flex flex-col items-center w-full max-w-screen-xl">
        {/* Logo and Menu Button for Mobile */}
        <div className="flex items-center justify-between w-full py-4 px-6 lg:px-14">
          {/* Logo */}
          <div className="flex justify-center w-full lg:w-auto">
            <a href="/">
              <img
                src="https://mtvn.a2t.vn/static/img/lg-program.6ae827668fae.png"
                alt="logo"
                className="w-32"
              />
            </a>
          </div>

          {/* Menu Button (Only on Mobile) */}
          <button
            id="toggleOpen"
            className="lg:hidden ml-auto"
            onClick={() => {
              document
                .getElementById("collapseMenu")
                .classList.toggle("hidden");
            }}
          >
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Section */}
        <div
          id="collapseMenu"
          className="lg:flex items-center justify-center w-full hidden lg:block"
        >
          <ul className="lg:flex gap-x-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={() => handleMenuClick(item.label)}
                  className={`block py-2 px-4 rounded hover:text-blue-600 transition-all ${
                    activeMenu === item.label
                      ? "text-blue-600 font-bold"
                      : "text-gray-800"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
