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
import { motion } from "framer-motion";

const { Title, Paragraph, Text } = Typography;

const cardData = [
  {
    title: "Lý Trí",
    icon: <ReadOutlined className="mr-2 text-pink-500" />,
    text: "Tình yêu phải đi cùng với lý trí, không phải chỉ là cám dỗ.",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSdw_LA4m-2sudATUury1mbxwV5pO8WM93_H-2Zug1e5uLouUxIBhI4pA1hLBC2ssi_5iB3oL2NJhRhFhT-OAi3UA",
  },
  {
    title: "Bổn Phận",
    icon: <BookOutlined className="mr-2 text-blue-500" />,
    text: "Trách nhiệm biến tình yêu thành hành động đạo đức có giá trị.",
    img: "https://file3.qdnd.vn/data/images/0/2019/11/27/thuha/271119ha61.jpg",
  },
  {
    title: "Ứng Dụng",
    icon: <TeamOutlined className="mr-2 text-green-500" />,
    text: "Trong gia đình, tình yêu phải bao hàm các nghĩa vụ và trách nhiệm.",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Lenin_in_1920_%28cropped%29.jpg",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/43/8a/d5/438ad54dfbf4bebf3d4f7cd09ba55db5.jpg"
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
              <a
                href="https://www.thitruongtudo.vn/chi-tiet/nhung-van-de-triet-hoc-ve-tu-do-va-trach-nhiem.html"
                target="_blank"
              >
                <Button type="primary" size="large" className="mt-8">
                  Tìm hiểu thêm
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="py-10 bg-gray-50">
        <div className="container px-4 mx-auto">
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={6}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Immanuel_Kant_-_Gemaelde_1.jpg/800px-Immanuel_Kant_-_Gemaelde_1.jpg"
                alt="Philosophy concept"
                className="w-full rounded-lg shadow-2xl hover:shadow-[0px_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300"
              />
            </Col>
            <Col xs={24} md={18}>
              <Title level={2} className="mb-6 text-blue-600">
                <HeartOutlined className="mr-2" />
                Khái Niệm Cơ Bản
              </Title>
              <Paragraph className="text-lg text-gray-700">
                Tình yêu và trách nhiệm là hai yếu tố then chốt trong đời sống
                con người, ảnh hưởng tới gia đình, cộng đồng và xã hội.
              </Paragraph>
              <Paragraph className="text-lg text-gray-700">
                - Tình yêu thể hiện qua sự quan tâm, chia sẻ và gắn kết giữa cá
                nhân với nhau, từ tình cảm gia đình, bạn bè đến tình yêu đôi
                lứa.
              </Paragraph>
              <Paragraph className="text-lg text-gray-700">
                - Trách nhiệm đi kèm với tình yêu, thể hiện qua sự cam kết, chăm
                sóc và bảo vệ những người mà ta yêu thương.
              </Paragraph>
              <Paragraph className="text-lg text-gray-700">
                Cả hai yếu tố này đóng vai trò quan trọng trong việc duy trì sự
                ổn định của gia đình, xây dựng cộng đồng vững mạnh và phát triển
                một xã hội hài hòa.
              </Paragraph>
            </Col>
          </Row>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="container px-4 mx-auto">
          <Title level={2} className="mb-12 text-center">
            Triết Học Kant về Tình Yêu
          </Title>
          <Row gutter={[32, 32]}>
            {cardData.map((item, index) => (
              <Col key={index} xs={24} md={8}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card
                    hoverable
                    className="h-[450px] flex flex-col justify-between"
                    cover={
                      <img
                        alt={item.title}
                        src={item.img}
                        className="object-fill h-80  rounded-t-lg"
                      />
                    }
                  >
                    <Title level={4}>
                      {item.icon}
                      {item.title}
                    </Title>
                    <Paragraph>{item.text}</Paragraph>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container lg:px-20 px-6 mx-auto">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={14}>
              <Title level={2} className="mb-8 flex items-center">
                <LockOutlined className="mr-2 text-blue-600" />
                Sartre: Tự Do và Trách Nhiệm
              </Title>
              <Timeline
                items={[
                  {
                    dot: <div className="w-3 h-3 bg-pink-500 rounded-full" />,
                    children: (
                      <div className="ml-2">
                        <Text
                          strong
                          className="block mb-2 text-lg text-gray-800"
                        >
                          Tự Do Lựa Chọn
                        </Text>
                        <Text className="text-gray-700">
                          Tình yêu là một sự lựa chọn tự do của mỗi cá nhân.
                        </Text>
                      </div>
                    ),
                  },
                  {
                    dot: <div className="w-3 h-3 bg-blue-500 rounded-full" />,
                    children: (
                      <div className="ml-2">
                        <Text
                          strong
                          className="block mb-2 text-lg text-gray-800"
                        >
                          Trách Nhiệm
                        </Text>
                        <Text className="text-gray-700">
                          Khi yêu, con người trở nên có trách nhiệm với đối
                          phương.
                        </Text>
                      </div>
                    ),
                  },
                  {
                    dot: <div className="w-3 h-3 bg-yellow-500 rounded-full" />,
                    children: (
                      <div className="ml-2">
                        <Text
                          strong
                          className="block mb-2 text-lg text-gray-800"
                        >
                          Cảnh Báo
                        </Text>
                        <Text className="text-gray-700">
                          Tránh để tình yêu trở thành sự "chiếm hữu".
                        </Text>
                      </div>
                    ),
                  },
                ]}
              />
            </Col>
            <Col xs={24} md={10}>
              <Carousel
                autoplay
                className="overflow-hidden rounded-lg shadow-xl"
              >
                {[
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Charles-Joseph_Natoire_-_V%C3%A9nus_et_Adonis.jpg/1200px-Charles-Joseph_Natoire_-_V%C3%A9nus_et_Adonis.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Carle_van_Loo_-_Baccus_et_Ariane.jpg/800px-Carle_van_Loo_-_Baccus_et_Ariane.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/N%C3%AEmes_%28Gard%29_-_Mus%C3%A9e_des_Beaux-Arts_-_%22V%C3%A9nus_et_Adonis_ou_Aurore_et_C%C3%A9phale%22_%28Charles-Joseph_Natoire%2C_1700-1777%29_%2839513470991%29.jpg/800px-N%C3%AEmes_%28Gard%29_-_Mus%C3%A9e_des_Beaux-Arts_-_%22V%C3%A9nus_et_Adonis_ou_Aurore_et_C%C3%A9phale%22_%28Charles-Joseph_Natoire%2C_1700-1777%29_%2839513470991%29.jpg?20210503123300",
                ].map((src, index) => (
                  <div key={index}>
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="w-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
        </div>
      </section>

      <section className="py-16 text-white bg-gradient-to-r from-pink-500 to-blue-500">
        <div className="container px-4 mx-auto text-center">
          <Title level={2} className="mb-8 text-white">
            Khám Phá Thêm về Triết Học Tình Yêu
          </Title>
          <Space size="large">
            <a
              target="_blank"
              href="https://www.thitruongtudo.vn/chi-tiet/nhung-van-de-triet-hoc-ve-tu-do-va-trach-nhiem.html"
            >
              <Button
                type="primary"
                size="large"
                ghost
                className="mb-8 text-white"
              >
                {" "}
                Đọc Thêm <ArrowRightOutlined />
              </Button>
            </a>
          </Space>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
