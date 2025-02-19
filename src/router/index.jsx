// src/routes/AppRouter.jsx
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/main-layout";
import UngDungVaoDoiSong from "../pages/congdanh-page";
import Home from "../pages/home";
import { default as TaiLieuBaiViet } from "../pages/kangmin-page";
import TinhYeuTrongTrietHoc from "../pages/phanhao-page/index";
import TrachNhiemTrongTrietHoc from "../pages/phuoctan-page/index";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="tinh-yeu" element={<TinhYeuTrongTrietHoc />} />
        <Route path="trach-nhiem" element={<TrachNhiemTrongTrietHoc />} />
        <Route path="ung-dung" element={<UngDungVaoDoiSong />} />
        <Route path="tai-lieu" element={<TaiLieuBaiViet />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
