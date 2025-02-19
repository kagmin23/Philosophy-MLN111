// src/components/MainLayout.jsx
import { Outlet } from "react-router-dom";
import FooterComponent from "../footer";
import HeaderComponent from "../header";

const MainLayout = () => {
  return (
    <>
      <HeaderComponent />
      <main className="min-h-screen p-4">
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
};

export default MainLayout;
