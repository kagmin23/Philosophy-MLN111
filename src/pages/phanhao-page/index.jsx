import { Button, List, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./index.css";

const TinhYeuTrongTrietHoc = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [setLoading] = useState(true);

  const API_QUOTES = "https://65f3f34a105614e654a18199.mockapi.io/philosophers";
  const API_COMMENTS = "https://65f3f34a105614e654a18199.mockapi.io/comments";

  useEffect(() => {
    fetch(API_COMMENTS)
      .then((response) => {
        if (!response.ok) throw new Error("Không thể tải bình luận.");
        return response.json();
      })
      .then((data) => {
        setComments((prevComments) => [data, ...prevComments]);
        setLoading(false);
        message.success("Bình luận đã được gửi thành công!");
      })
      .catch((error) => {
        console.error("Lỗi lấy bình luận:", error);
        message.error("Lỗi tải bình luận!");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(API_QUOTES)
      .then((response) => {
        if (!response.ok) throw new Error("Không thể tải danh sách triết gia.");
        return response.json();
      })
      .then((data) => setQuotes(data))
      .catch((error) => {
        console.error("Lỗi lấy triết gia:", error);
        message.error("Lỗi tải danh sách triết gia!");
      });
  }, []);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        username: "Người dùng mới",
        comment: newComment,
      };

      fetch(API_COMMENTS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCommentObj),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Gửi bình luận thất bại.");
          return response.json();
        })
        .then((data) => {
          setComments([data, ...comments]);
          message.success("Bình luận đã được gửi thành công!");
        })
        .catch((error) => {
          console.error("Lỗi gửi bình luận:", error);
          message.error("Gửi bình luận thất bại. Vui lòng thử lại.");
        });

      setNewComment("");
    } else {
      message.warning("Vui lòng nhập nội dung bình luận!");
    }
  };

  return (
    <div className="min-h-screen mt-5 bg-white App">
      <header className="px-4 py-6 text-center text-white bg-pink-500">
        <h1 className="text-3xl font-bold">Tình Yêu Trong Triết Học</h1>
        <p className="mt-2">
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

        <section className="max-w-4xl p-6 mx-auto mt-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-blue-500">
            Những Câu Nói Nổi Tiếng Về Tình Yêu
          </h2>
          {quotes.length === 0 ? (
            <p className="text-center text-gray-500">Không có dữ liệu.</p>
          ) : (
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              className="swiper-container"
            >
              {quotes.map((quote) => (
                <SwiperSlide
                  key={quote.id}
                  className="flex flex-col items-center justify-center p-6"
                >
                  <img
                    src={quote.avatar}
                    alt={quote.name}
                    className="object-cover w-24 h-24 mb-4 rounded-full"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {quote.name}
                  </h3>
                  <blockquote className="mt-2 italic text-center text-gray-700">
                    "{quote.quote}"
                  </blockquote>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </section>

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

        <h2 className="mt-8 mb-4 text-2xl font-bold text-blue-500">
          Diễn đàn thảo luận
        </h2>
        <div>
          <TextArea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Nhập bình luận của bạn..."
            rows={4}
            className="mb-4"
          />
          <Button
            type="primary"
            onClick={handleAddComment}
            className="bg-pink-500"
          >
            Gửi bình luận
          </Button>
          <List
            className="mt-4"
            dataSource={comments}
            renderItem={(item) => (
              <List.Item className="p-3 bg-gray-100 border rounded-lg shadow-sm">
                <div>
                  <strong className="text-blue-600">{item.username}:</strong>
                  <p className="text-gray-800">{item.comment}</p>
                </div>
              </List.Item>
            )}
          />
        </div>

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
