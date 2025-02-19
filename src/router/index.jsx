// src/routes/AppRouter.jsx
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/main-layout";
import CongDanh from "../pages/congdanh-page";
import Home from "../pages/home";
import KangMin from "../pages/kangmin-page";
import PhanHao from "../pages/phanhao-page";
import PhuocTan from "../pages/phuoctan-page";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="phuoctan" element={<PhuocTan />} />
        <Route path="kangmin" element={<KangMin />} />
        <Route path="congdanh" element={<CongDanh />} />
        <Route path="phanhao" element={<PhanHao />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
