import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Layout, Row, Space, Typography } from "antd";
import { Link } from "react-router-dom";
const { Footer } = Layout;
const { Title, Text } = Typography;

const FooterComponent = () => {
  return (
    <Footer className="text-white py-7 bg-gradient-to-b from-blue-500 to-white ">
      <div className="container justify-between px-4 mx-auto text-center">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="mb-4 text-white">
              Triết Tình
            </Title>
            <Text className="text-white text-base">
              Khám phá chiều sâu của <br /> tình yêu và trách nhiệm trong triết
              học
            </Text>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="mb-4 text-white">
              Liên Kết
            </Title>
            <Space direction="vertical" className="text-white">
              <Link to="/" className="text-white hover:text-gray-200">
                Trang Chủ
              </Link>
              <Link to="/tinh-yeu" className="text-white hover:text-gray-200">
                Tình yêu trong Triết học
              </Link>
              <Link
                to="/trach-nhiem"
                className="text-white hover:text-gray-200"
              >
                Trách Nhiệm Trong Triết Học
              </Link>
              <Link to="/ung-dung" className="text-white hover:text-gray-200">
                Ứng Dụng Vào Đời Sống
              </Link>
              <Link to="/tai-lieu" className="text-white hover:text-gray-200">
                Tài Liệu & Bài Viết
              </Link>
            </Space>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="mb-4 text-white">
              Liên Hệ
            </Title>
            <Space direction="vertical" className="text-start">
              <Text className="text-white">
                <MailOutlined className="mr-2" /> devhoctriet@triettinhvn.com
              </Text>
              <Text className="text-white">
                <PhoneOutlined className="mr-2" /> +84 123 456 789
              </Text>
              <Text className="text-white">
                <EnvironmentOutlined className="mr-2" /> FPT University HCM
              </Text>
            </Space>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="mb-4 text-white">
              Theo Dõi
            </Title>
            <Space size="large">
              <Link className="text-2xl text-white hover:text-gray-200">
                <FacebookOutlined />
              </Link>

              <Link className="text-2xl text-white hover:text-gray-200">
                <InstagramOutlined />
              </Link>
            </Space>
          </Col>
        </Row>
      </div>
      <div className="pt-8 mt-8 text-center text-white border-t border-gray-200">
        <Text>© 2024 Triết Tình. All rights reserved.</Text>
      </div>
    </Footer>
  );
};

export default FooterComponent;
