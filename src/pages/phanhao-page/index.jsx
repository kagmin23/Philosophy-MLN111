import { Button, List, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "./index.css";
import CommentList from "./comment/comment";

const TinhYeuTrongTrietHoc = () => {
  const [setLoading] = useState(true);
  return (
    <div className="min-h-screen p-6 mt-5 bg-gradient-to-b from-pink-100 to-white">
      <header className="px-4 py-6 text-center text-white ">
        <h1 className="text-3xl font-semibold text-center text-pink-700">
          Tình Yêu Trong Triết Học
        </h1>
        <p className="my-2 text-center text-gray-600">
          "Tình yêu là ngôn ngữ của tâm hồn, vượt qua mọi ranh giới."
        </p>
      </header>

      <section className="max-w-4xl p-6 mx-auto mt-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-blue-500">
          Quan điểm của triết học Mác - Lênin về tình yêu
        </h2>
        <div className="space-y-4">
          <p>
            Theo Mác, con người không chỉ yêu cá nhân mà còn yêu tập thể, yêu
            con người nói chung. Ví dụ: Tình yêu giữa các thành viên trong xã
            hội chủ nghĩa phải đặt trên cơ sở bình đẳng và đoàn kết.
          </p>
          <p>
            Chủ nghĩa Mác - Lênin nhấn mạnh vào tinh thần quốc tế vô sản, nơi
            tình yêu không chỉ giới hạn trong biên giới quốc gia mà còn là sự
            đoàn kết giữa các dân tộc.
          </p>
          <p>
            Tình yêu trong triết học Mác - Lênin không chỉ là cảm xúc cá nhân mà
            còn mang ý nghĩa giai cấp. Người vô sản yêu nhau trên nền tảng cùng
            chung lý tưởng đấu tranh.
          </p>
          <blockquote className="italic text-gray-700">
            "Sự phát triển của một người là điều kiện cho sự phát triển của tất
            cả mọi người." – Karl Marx
          </blockquote>
        </div>

        <h2 className="mt-8 mb-4 text-2xl font-bold text-blue-500">
          Bảng So Sánh Các Triết Học Về Tình Yêu
        </h2>
        <table className="w-full border border-collapse border-gray-300">
          <thead>
            <tr className="bg-pink-100">
              <th className="p-2 border border-gray-300">Triết học</th>
              <th className="p-2 border border-gray-300">
                Quan điểm về tình yêu
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300">Mác - Lênin</td>
              <td className="p-2 border border-gray-300">
                Tình yêu mang tính giai cấp, xã hội và trách nhiệm.
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">Phật giáo</td>
              <td className="p-2 border border-gray-300">
                Tình yêu là lòng từ bi, vị tha và không dính mắc.
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">Nho giáo</td>
              <td className="p-2 border border-gray-300">
                Tình yêu dựa trên quan hệ đạo đức và gia đình.
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">
                Triết học phương Tây
              </td>
              <td className="p-2 border border-gray-300">
                Tình yêu mang tính cá nhân và tự do cá nhân.
              </td>
            </tr>
          </tbody>
        </table>

        <CommentList />

        <h2 className="mt-8 mb-4 text-2xl font-bold text-blue-500">
          Video Minh Họa
        </h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jKHe-Lrhh8k?si=LcThwv35EtQJFozZ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default TinhYeuTrongTrietHoc;
