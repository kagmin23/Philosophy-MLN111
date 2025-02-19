import {
  ArrowRightOutlined,
  BookOutlined,
  HeartOutlined,
  LockOutlined,
  ReadOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Carousel,
  Col,
  Row,
  Space,
  Timeline,
  Typography,
} from "antd";

const { Title, Paragraph, Text } = Typography;
const TrachNhiemTrongTrietHoc
  = () => {
    return (
      <div className="min-h-screen">
        <div className="relative h-[500px] overflow-hidden mt-20">
          <img
            src="/src/assets/back_triết tình.jpg"
            alt="Hero background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/70 to-blue-500/70">
            <div className="container flex items-center h-full px-4 mx-auto">
              <div className="max-w-2xl text-white">
                <Title className="mb-6 text-white">Triết Tình</Title>
                <Paragraph className="text-xl text-white/90">
                  Khám phá chiều sâu của tình yêu và trách nhiệm trong triết học
                </Paragraph>
                <a href="https://www.thitruongtudo.vn/chi-tiet/nhung-van-de-triet-hoc-ve-tu-do-va-trach-nhiem.html" target="_blank">
                <Button type="primary" size="large" className="mt-8">
                  Tìm hiểu thêm
                </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-10 bg-gray-50">
          <div className="container px-4 mx-auto">
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} md={12}>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Philosophy concept"
                  className="w-full rounded-lg shadow-2xl hover:shadow-[0px_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300"
                />
              </Col>
              <Col xs={24} md={12}>
                <Title level={2} className="mb-6 text-blue-600">

                  Khái Niệm Cơ Bản
                </Title>
                <Paragraph className="text-lg text-gray-700">
                  Theo chủ nghĩa Mác - Lênin, con người không tồn tại độc lập mà luôn gắn liền với xã hội. Do đó, trách nhiệm cá nhân và trách nhiệm xã hội có mối quan hệ biện chứng chặt chẽ.

                </Paragraph>
              </Col>
            </Row>
          </div>
        </section>

        {/* Kant's Philosophy Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-blue-50">
          <div className="container px-4 mx-auto">
            <Title level={2} className="mb-12 text-center">
            Mối quan hệ giữa trách nhiệm và đạo đức cách mạng
            </Title>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <Card
                  hoverable
                  className="h-full p-2"
                >
                  <Paragraph className="text-xl">
                    Đạo đức cách mạng theo tư tưởng Hồ Chí Minh là lòng trung thành với lý tưởng, sự tận tụy vì lợi ích nhân dân và đất nước.
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card
                  hoverable
                  className="h-full p-2 text-xl "
                >
                  <Paragraph  className="text-xl">
                  Trách nhiệm là yếu tố quan trọng tạo nên đạo đức cách mạng, thể hiện qua hành động thực tiễn của mỗi cá nhân đối với tập thể.
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card
                  hoverable
                  className="h-full p-2"
                >
                  <Paragraph className="text-xl">
                  Người có đạo đức cách mạng cao là người luôn ý thức trách nhiệm của mình, dám chịu trách nhiệm và đặt lợi ích chung lên trên lợi ích cá nhân
                  </Paragraph>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} md={12}>
                <Title level={2} className="mb-8">
                  Trách nhiệm trong tình yêu: Yêu có trách nhiệm là gì?
                </Title>
                <Timeline
                  items={[
                    {
                      dot: <div className="w-3 h-3 bg-pink-500 rounded-full" />,
                      children: (
                        <div className="ml-2">
                          <Text strong className="block mb-2 text-lg">
                          Yêu có trách nhiệm
                          </Text>
                          <Text className="text-gray-600">
                          Yêu có trách nhiệm là không chỉ yêu bằng cảm xúc mà còn có sự tôn trọng, quan tâm và sẵn sàng chịu trách nhiệm với quyết định của mình.
                          </Text>
                        </div>
                      ),
                    },
                    {
                      dot: <div className="w-3 h-3 bg-blue-500 rounded-full" />,
                      children: (
                        <div className="ml-2">
                          <Text strong className="block mb-2 text-lg">
                          Mối quan hệ bền vững
                          </Text>
                          <Text className="text-gray-600">
                          Một mối quan hệ bền vững không chỉ dựa vào tình cảm mà còn phụ thuộc vào cách hai người ứng xử, thấu hiểu và hỗ trợ nhau
                          </Text>
                        </div>
                      ),
                    },
                  ]}
                />
              </Col>
              <Col xs={24} md={12}>
                <Carousel
                  autoplay
                  className="overflow-hidden rounded-lg shadow-xl"
                >
                  <div>
                    <img
                      src="https://media.vov.vn/sites/default/files/styles/large/public/2021-02/5b9931d43cccd121008b45a3.jpg"
                      alt="Responsibility"
                      className="w-full h-[500px]"
                    />
                  </div>
                  <div>
                    <img
                      src="https://admin.vov.gov.vn/UploadFolder/KhoTin/Images/UploadFolder/VOVVN/Images/sites/default/files/styles/large/public/2022-11/song-th.jpg"
                      alt="Responsibility"
                      className="w-full h-[500px]"
                    />
                  </div>
                </Carousel>
              </Col>
            </Row>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-white bg-gradient-to-r from-pink-500 to-blue-500">
          <div className="container px-4 mx-auto text-center">
            <Title level={2} className="mb-8 text-white">
              Khám Phá Thêm về Trách Nhiệm trong Triết Học
            </Title>
            <Space size="large">
             <a target="_blank" href="https://www.thitruongtudo.vn/chi-tiet/nhung-van-de-triet-hoc-ve-tu-do-va-trach-nhiem.html">
             <Button type="primary" size="large" ghost>
                Đọc Thêm <ArrowRightOutlined />
              </Button>
             </a>
            </Space>
          </div>
        </section>
      </div>
    )
  }

export default TrachNhiemTrongTrietHoc;
