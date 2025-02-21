import { Button, Card, Col, Row, Space, Typography } from "antd";
import CommentList from "./comment/comment";
import PhilosopherSlider from "./slider/PhilosopherSlider";
import "./index.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const { Title, Paragraph, Text } = Typography;

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TinhYeuTrongTrietHoc = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-screen mt-5 bg-gradient-to-b from-pink-50 to-white"
    >
      <header className="px-4 py-6 text-center text-pink-700">
        <motion.h1 variants={fadeIn} className="text-4xl">
          Tình Yêu Trong Triết Học
        </motion.h1>
        <motion.p variants={fadeIn} className="my-2 text-gray-600 italic">
          "Tình yêu là ngôn ngữ của tâm hồn, vượt qua mọi ranh giới."
        </motion.p>
      </header>

      <section className="max-w-7xl mx-auto rounded-2xl">
        <motion.div variants={fadeIn}>
          <Card className="my-2 border-pink-300 shadow-md flex flex-row justify-start">
            <div className="container mx-auto">
              <h2 className="text-2xl text-center text-pink-700">
                Quan điểm của Triết học Mác - Lênin về tình yêu
              </h2>
              <Row gutter={[32, 32]} align="middle" className="mb-8">
                <Col xs={24} md={10}>
                  <motion.img
                    src="https://baoquangbinh.vn/dataimages/202004/original/images666982_lenin_20420a.jpg"
                    alt="Philosophy concept"
                    className="w-full rounded-lg shadow-2xl hover:shadow-[0px_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300"
                  />
                </Col>
                <Col xs={24} md={14}>
                  <h2 className="text-pink-700">Tình yêu con người</h2>
                  <p>
                    Theo Mác, con người không chỉ yêu cá nhân mà còn yêu tập
                    thể, yêu con người nói chung.
                  </p>
                  <p>
                    Tình yêu giữa các thành viên trong xã hội chủ nghĩa đặt trên
                    cơ sở bình đẳng, đoàn kết và cùng phát triển.
                  </p>
                  <p>
                    Ví dụ: Trong xã hội chủ nghĩa, tình yêu giữa các cá nhân
                    phải gắn với trách nhiệm xã hội, không đơn thuần là tình cảm
                    riêng tư.
                  </p>
                </Col>
              </Row>
              <Row gutter={[32, 32]} align="middle" className="mb-8">
                <Col xs={24} md={14}>
                  <h2 className="text-pink-700">Tình yêu giai cấp</h2>
                  <p>
                    Tình yêu trong triết học Mác - Lênin không chỉ đơn thuần là
                    cảm xúc cá nhân mà còn mang ý nghĩa đấu tranh giai cấp.
                  </p>
                  <p>
                    Giai cấp vô sản yêu nhau trên nền tảng cùng chung lý tưởng
                    cách mạng, cùng đấu tranh để giải phóng giai cấp.
                  </p>
                  <p>
                    Ví dụ: Công nhân và nông dân đoàn kết với nhau trong các
                    phong trào cách mạng để giành quyền lợi chính đáng.
                  </p>
                </Col>
                <Col xs={24} md={10}>
                  <motion.img
                    src="https://phunuvietnam.mediacdn.vn/media/news/71e1d046417f3682dffa6f8f294da241/hnh-v-lenin-v-v.jpg"
                    alt="Philosophy concept"
                    className="w-full rounded-lg shadow-2xl hover:shadow-[0px_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300"
                  />
                </Col>
              </Row>
              <Row gutter={[32, 32]} align="middle" className="mb-8">
                <Col xs={24} md={10}>
                  <motion.img
                    src="https://hoilhpn.org.vn/documents/20182/1823217/small_11876.jpg/69ef86c9-dd9b-407e-b978-1bedf3c4948e"
                    alt="Philosophy concept"
                    className="w-full rounded-lg shadow-2xl hover:shadow-[0px_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300"
                  />
                </Col>
                <Col xs={24} md={14}>
                  <h2 className="text-pink-700">Tình yêu giai cấp</h2>
                  <p>
                    Tình yêu trong triết học Mác - Lênin không chỉ đơn thuần là
                    cảm xúc cá nhân mà còn mang ý nghĩa đấu tranh giai cấp.
                  </p>
                  <p>
                    Giai cấp vô sản yêu nhau trên nền tảng cùng chung lý tưởng
                    cách mạng, cùng đấu tranh để giải phóng giai cấp.
                  </p>
                  <p>
                    Ví dụ: Công nhân và nông dân đoàn kết với nhau trong các
                    phong trào cách mạng để giành quyền lợi chính đáng.
                  </p>
                </Col>
              </Row>
            </div>
          </Card>
        </motion.div>

        <blockquote className="italic text-base text-center text-gray-600 mt-10">
          "Sự phát triển của một người là điều kiện cho sự phát triển của tất cả
          mọi người." – Karl Marx
        </blockquote>

        <PhilosopherSlider />
        <motion.div variants={fadeIn}>
          <blockquote className="italic text-base text-center text-gray-600 mt-10 mb-10">
            "Tình yêu thực sự không chỉ là yêu một cá nhân, mà là yêu cả xã hội
            và đấu tranh vì một xã hội công bằng."
          </blockquote>
        </motion.div>

        <Card className="my-2 border-pink-300 shadow-md flex flex-row justify-start">
          <div className="container  mx-auto">
            <h2 className="text-2xl text-center text-pink-700">
              Các quan điểm triết học khác về tình yêu
            </h2>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <Card hoverable className="h-full p-2">
                  <h3 className="text-pink-700 text-center">
                    Chủ nghĩa hiện sinh
                  </h3>
                  <p>
                    Tình yêu là sự tự do cá nhân, mang ý nghĩa hiện sinh và giúp
                    con người tìm kiếm ý nghĩa cuộc sống.
                  </p>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card hoverable className="h-full p-2">
                  <h3 className="text-pink-700 text-center">
                    Chủ nghĩa lãng mạn
                  </h3>
                  <p>
                    Tình yêu là cảm xúc thuần khiết, là động lực giúp con người
                    sáng tạo và vươn tới cái đẹp.
                  </p>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card hoverable className="h-full p-2">
                  <h3 className="text-pink-700 text-center">
                    Chủ nghĩa thực dụng
                  </h3>
                  <p>
                    Tình yêu có tính toán, dựa trên lợi ích cá nhân hoặc lợi ích
                    tập thể.
                  </p>
                </Card>
              </Col>
            </Row>
          </div>
        </Card>
        <motion.div variants={fadeIn}>
          <blockquote className="italic text-base text-center text-gray-600 mt-10 mb-10">
            “Yêu là tìm hạnh phúc của mình trong hạnh phúc của người khác.” –
            Gottfried Wilhelm Leibniz
          </blockquote>
        </motion.div>

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
        <motion.div variants={fadeIn}>
          <h2 className="text-2xl font-semibold text-center text-pink-600">
            Video Minh Họa
          </h2>
        </motion.div>

        <div className="rounded-lg overflow-hidden flex justify-center">
          <div className="w-[300px] md:w-[400px] lg:w-[500px] aspect-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3LCl2UOtUlk?si=p57BIk_AhXQWwk1K"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className="py-16 mt-5 text-white bg-gradient-to-r from-pink-500 to-blue-500">
        <div className="container mx-auto text-center">
          <Title level={2} className="text-white">
            Khám Phá Thêm về Tình yêu trong Triết Học
          </Title>
          <Space size="large">
            <a
              target="_blank"
              href="https://spiderum.com/bai-dang/Tinh-yeu-trong-con-mat-triet-hoc-YfBjTwxqHYRs"
            >
              <Button type="primary" size="large" ghost className="text-white">
                Đọc Thêm <ArrowRightOutlined />
              </Button>
            </a>
          </Space>
        </div>
      </section>
    </motion.div>
  );
};

export default TinhYeuTrongTrietHoc;
