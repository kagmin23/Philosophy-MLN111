import { Route, Routes } from "react-router-dom"
import PhuocTan from "../pages/phuoctan-page"
import KangMin from "../pages/kangmin-page"
import CongDanh from "../pages/congdanh-page"
import PhanHao from "../pages/phanhao-page"
import Home from "../pages/home"
const AppRouter = () => {
    return (
        <Routes>
             <Route path={"/"} element={<Home />} />
              <Route path={"phuoctan"} element={<PhuocTan />} />
              <Route path={"kangmin"} element={<KangMin />} />
              <Route path={"congdanh"} element={<CongDanh />} />
              <Route path={"phanhao"} element={<PhanHao />} />
        </Routes>
    )
}

export default AppRouter