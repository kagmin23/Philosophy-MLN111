// src/components/Header/index.jsx
import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Layout, Menu } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const { Header } = Layout;

const HeaderComponent = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            key: 'triet-hoc',
            label: 'Tình Yêu Trong Triết Học',
        },
        {
            key: 'trach-nhiem',
            label: 'Trách Nhiệm Trong Triết Học',
        },
        {
            key: 'ung-dung',
            label: 'Ứng Dụng Vào Đời Sống',
        },
        {
            key: 'tai-lieu',
            label: 'Tài Liệu & Bài Viết',
        },
    ];

    const handleMenuClick = (e) => {
        navigate(`/${e.key}`);
        setVisible(false);
    };

    return (
        <Header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
            <div className="container flex items-center justify-between h-full px-4 mx-auto">
                {/* Logo */}
                <div
                    className="text-2xl font-bold text-pink-600 cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    Triết Tình
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:block">
                    <Menu
                        mode="horizontal"
                        items={menuItems}
                        onClick={handleMenuClick}
                        selectedKeys={[location.pathname.slice(1)]}
                        className="border-none"
                    />
                </div>

                {/* Mobile Menu Button */}
                <Button
                    className="lg:hidden"
                    type="text"
                    icon={<MenuOutlined />}
                    onClick={() => setVisible(true)}
                />

                {/* Mobile Menu Drawer */}
                <Drawer
                    title="Menu"
                    placement="right"
                    onClose={() => setVisible(false)}
                    open={visible}
                >
                    <Menu
                        mode="vertical"
                        items={menuItems}
                        onClick={handleMenuClick}
                        selectedKeys={[location.pathname.slice(1)]}
                    />
                </Drawer>
            </div>
        </Header>
    );
};

export default HeaderComponent;