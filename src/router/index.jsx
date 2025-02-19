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
<<<<<<< HEAD
        <Route path="triet-tinh" element={<PhuocTan />} />
        <Route path="trach-nhiem" element={<KangMin />} />
        <Route path="ung-dung" element={<CongDanh />} />
        <Route path="tai-lieu" element={<TaiLieuBaiViet />} />
=======
        <Route path="phuoctan" element={<PhuocTan />} />
        <Route path="kangmin" element={<KangMin />} />
        <Route path="congdanh" element={<CongDanh />} />
        <Route path="tinh-yeu" element={<PhanHao />} />
>>>>>>> 648c82277a477e820acb9e97755c55e33d1cfe49
      </Route>
    </Routes>
  );
};

export default AppRouter;
