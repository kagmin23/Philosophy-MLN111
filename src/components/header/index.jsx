import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { key: "tinh-yeu", label: "Tình Yêu Trong Triết Học" },
    { key: "trach-nhiem", label: "Trách Nhiệm Trong Triết Học" },
    { key: "ung-dung", label: "Ứng Dụng Vào Đời Sống" },
    { key: "tai-lieu", label: "Tài Liệu & Bài Viết" },
  ];

  const handleMenuClick = (e) => {
    navigate(`/${e.key}`);
  };

  return (
    <Header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm ">
      <div className="container flex items-center justify-between h-full ">
        <div
          className="flex items-center text-2xl font-bold text-pink-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Triết Tình
        </div>

        <Menu
          mode="horizontal"
          items={menuItems}
          onClick={handleMenuClick}
          selectedKeys={[location.pathname.slice(1)]}
          className="!border-none !shadow-none flex-1 justify-end "
        />
      </div>
    </Header>
  );
};

export default HeaderComponent;
