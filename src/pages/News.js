import React from "react";
import "./../input.css";
import MainBanner from "../layout/MainBanner";
import ArticleList from "../layout/ArticleList";

const newsData = [
  {
    id: 1,
    imgSrc:
      "https://cdn1864.cdn-template-4s.com/thumbs/news/blog-img-10_thumb_720.jpg",
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    category: "Europe",
  },
  {
    id: 2,
    imgSrc:
      "https://cdn1864.cdn-template-4s.com/thumbs/news/blog-img-9_thumb_720.jpg",
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    category: "Europe",
  },
  {
    id: 3,
    imgSrc:
      "https://cdn1864.cdn-template-4s.com/thumbs/news/blog-img-8_thumb_720.jpg",
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    category: "Europe",
  },
  {
    id: 4,
    imgSrc:
      "https://cdn1864.cdn-template-4s.com/thumbs/news/blog-img-7_thumb_720.jpg",
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    category: "Europe",
  },
  {
    id: 5,
    imgSrc:
      "https://cdn1864.cdn-template-4s.com/thumbs/news/blog-img-5_thumb_720.jpg",
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    category: "Europe",
  },
  {
    id: 6,
    imgSrc:
      "https://cdn1864.cdn-template-4s.com/thumbs/news/blog-img-3_thumb_720.jpg",
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    category: "Europe",
  },
];

function News() {
  return (
    <div className="flex flex-col lg:flex-row px-8 lg:px-32 py-6">
      {/* Phần Banner chính */}
      <div className="lg:w-2/3 mb-4 lg:mb-0">
        <MainBanner />
      </div>

      {/* Danh sách bài viết */}
      <div className="lg:w-1/2">
        <ArticleList articles={newsData} />
      </div>
    </div>
  );
}

export default News;
