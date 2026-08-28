import { Outlet } from "react-router-dom";
import Products from "../pages/Products";
import Navbar from "../components/Navbar";

const ProductLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}
export default ProductLayout;