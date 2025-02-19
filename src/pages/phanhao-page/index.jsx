import { Card } from "antd";
import CommentList from "./comment/comment";
import PhilosopherSlider from "./slider/PhilosopherSlider";
import "./index.css";

const TinhYeuTrongTrietHoc = () => {
  return (
    <div className="min-h-screen p-6 mt-5 bg-gradient-to-b from-pink-50 to-white">
      <header className="px-4 py-6 text-center text-pink-700">
        <h1 className="text-4xl">Tình Yêu Trong Triết Học</h1>
        <p className="my-2 text-gray-600 italic">
          "Tình yêu là ngôn ngữ của tâm hồn, vượt qua mọi ranh giới."
        </p>
      </header>

      <section className="max-w-5xl mx-auto  rounded-2xl">
        <Card className="my-4 border-pink-300 shadow-md">
          <h2 className="text-2xl text-center text-pink-700">
            Quan điểm của triết học Mác - Lênin về tình yêu
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
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
            <blockquote className="italic text-base text-center text-gray-600">
              "Sự phát triển của một người là điều kiện cho sự phát triển của
              tất cả mọi người." – Karl Marx
            </blockquote>
          </div>
        </Card>
        <PhilosopherSlider />
        <Card className="my-4 border-pink-300 shadow-md">
          <h2 className="text-2xl text-center text-pink-700">
            So Sánh Các Triết Học Về Tình Yêu
          </h2>
          <table className="w-full border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-pink-200 text-pink-900">
                <th className="p-3 text-left">Triết học</th>
                <th className="p-3 text-left">Quan điểm về tình yêu</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                <td className="p-3 font-medium">Mác - Lênin</td>
                <td className="p-3">
                  Tình yêu mang tính giai cấp, xã hội và trách nhiệm.
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                <td className="p-3 font-medium">Phật giáo</td>
                <td className="p-3">
                  Tình yêu là lòng từ bi, vị tha và không dính mắc.
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100 transition">
                <td className="p-3 font-medium">Nho giáo</td>
                <td className="p-3">
                  Tình yêu dựa trên quan hệ đạo đức và gia đình.
                </td>
              </tr>
              <tr className="hover:bg-gray-100 transition">
                <td className="p-3 font-medium">Triết học phương Tây</td>
                <td className="p-3">
                  Tình yêu mang tính cá nhân và tự do cá nhân.
                </td>
              </tr>
            </tbody>
          </table>
        </Card>

        <Card className="my-4 border-pink-300 shadow-md">
          <h2 className="text-2xl font-semibold text-center text-pink-600">
            Video Minh Họa
          </h2>

          <div className="rounded-lg overflow-hidden flex justify-center">
            <div className="w-[300px] md:w-[400px] lg:w-[500px] aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/jKHe-Lrhh8k?si=LcThwv35EtQJFozZ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Card>

        <Card className="my-4 border-pink-300 shadow-md ">
          <CommentList />
        </Card>
      </section>
    </div>
  );
};

export default TinhYeuTrongTrietHoc;
