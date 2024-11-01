import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the auto-play speed
    responsive: [
      {
        breakpoint: 640, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true, // Show dots for navigation
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Desktops
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const imageData = [
    "https://img.freepik.com/premium-photo/independence-day-celebration-vietnam-honoring-national-pride-heritage_947814-107958.jpg?w=1060",
    "https://d3design.vn/uploads/Ph%E1%BA%A1m%20V%C4%83n%20L%E1%BB%99c%20-%20Tp.%20H%E1%BB%93%20Ch%C3%AD%20Minh.jpg",
  ];

  return (
    <div className="w-full h-auto">
      <Slider {...settings}>
        {imageData.map((image, index) => (
          <div key={index} className="h-full p-4 md:p-8 lg:p-16">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-auto max-h-60 md:max-h-80 lg:max-h-[500px] xl:max-h-[700px] object-cover rounded-lg shadow-lg" // Increased height for larger screens
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
