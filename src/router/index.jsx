// src/routes/AppRouter.jsx
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/main-layout";
import CongDanh from "../pages/congdanh-page";
import Home from "../pages/home";
import { default as KangMin, default as TaiLieuBaiViet } from "../pages/kangmin-page";
import PhuocTan from "../pages/phuoctan-page";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="triet-tinh" element={<PhuocTan />} />
        <Route path="trach-nhiem" element={<KangMin />} />
        <Route path="ung-dung" element={<CongDanh />} />
        <Route path="tai-lieu" element={<TaiLieuBaiViet />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
