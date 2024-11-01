import React from "react";
import News from "./News";
import Article from "../layout/Article";

function TinTuc() {
  const articles = [
    {
      id: 1,
      title: "GỬI NHAU CÂU CHÚC - CÙNG TRAO LÌ XÌ",
      image:
        "https://mtvn-s3.a2t.vn/2024/01/24/03/0b4c5c68-84ad-4ac1-936a-db65b4b77407_lixi1-min.jpg",
    },
    {
      id: 2,
      title: "TẾT CỦA BẠN CÓ VỊ GÌ?",
      image:
        "https://mtvn-s3.a2t.vn/2024/01/22/10/4c1058f8-8bd4-48d8-85c2-8074408cef99_1.jpg",
    },
    {
      id: 3,
      title: "KHÁM PHÁ MÓN NGON TẾT VIỆT 3 MIỀN",
      image:
        "https://mtvn-s3.a2t.vn/2024/01/22/10/fb9d736c-ddec-4816-b90c-26acf8e7cbba_TNAG1-min.jpg",
    },
    {
      id: 4,
      title:
        "TẾT ĐẾN XUÂN SANG CÙNG TRẢI NGHIỆM NHỮNG TRÒ CHƠI DÂN GIAN NGÀY TẾT",
      image:
        "https://mtvn-s3.a2t.vn/2024/01/22/10/5d5bc43d-9f7d-4827-b1e5-c0024425851d_D%C3%A2n_gian_1.jpg",
    },
    {
      id: 4,
      title:
        "TẾT ĐẾN XUÂN SANG CÙNG TRẢI NGHIỆM NHỮNG TRÒ CHƠI DÂN GIAN NGÀY TẾT",
      image:
        "https://mtvn-s3.a2t.vn/2024/01/22/10/5d5bc43d-9f7d-4827-b1e5-c0024425851d_D%C3%A2n_gian_1.jpg",
    },
    {
      id: 4,
      title:
        "TẾT ĐẾN XUÂN SANG CÙNG TRẢI NGHIỆM NHỮNG TRÒ CHƠI DÂN GIAN NGÀY TẾT",
      image:
        "https://mtvn-s3.a2t.vn/2024/01/22/10/5d5bc43d-9f7d-4827-b1e5-c0024425851d_D%C3%A2n_gian_1.jpg",
    },
    {
      id: 4,
      title:
        "TẾT ĐẾN XUÂN SANG CÙNG TRẢI NGHIỆM NHỮNG TRÒ CHƠI DÂN GIAN NGÀY TẾT",
      image:
        "https://mtvn-s3.a2t.vn/2024/01/22/10/5d5bc43d-9f7d-4827-b1e5-c0024425851d_D%C3%A2n_gian_1.jpg",
    },
    {
      id: 4,
      title:
        "TẾT ĐẾN XUÂN SANG CÙNG TRẢI NGHIỆM NHỮNG TRÒ CHƠI DÂN GIAN NGÀY TẾT",
      image:
        "https://mtvn-s3.a2t.vn/2024/01/22/10/5d5bc43d-9f7d-4827-b1e5-c0024425851d_D%C3%A2n_gian_1.jpg",
    },
    {
      id: 4,
      title:
        "TẾT ĐẾN XUÂN SANG CÙNG TRẢI NGHIỆM NHỮNG TRÒ CHƠI DÂN GIAN NGÀY TẾT",
      image:
        "https://mtvn-s3.a2t.vn/2024/01/22/10/5d5bc43d-9f7d-4827-b1e5-c0024425851d_D%C3%A2n_gian_1.jpg",
    },
  ];
  return (
    <div className="pt-28">
      <News />
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="w-86 h-72 overflow-hidden rounded-lg group-hover:scale-105">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xs font-bold text-blue-500 p-4">
              {article.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TinTuc;
