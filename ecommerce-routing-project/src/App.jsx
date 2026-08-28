import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import RootLayout from "./layout/RootLayout";
import ProductLayout from "./layout/productsLayout";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import Settings from "./components/Setting";
import ProductDetails from "./pages/ProductsDetails";
import DashboardLayout from "./layout/DashboardLayout";
import { productDetailsLoader } from "./pages/ProductsDetails";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import Products, { getProducts } from "./pages/Products";
const App  = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path = "/" element = {<RootLayout/>}>
      <Route  index element = {<Home/>}/>
      <Route path = "products" element = {<ProductLayout/>}  errorElement={<Error/>}>
        <Route index  element = {<Products/>} loader ={getProducts}/>
        <Route path=":id" element = {<ProductDetails/>} loader= {productDetailsLoader} />
      </Route>
      <Route path = "cart" element = {<Cart/>}/>
      <Route path = "login" element = {<Login/>}/>
      <Route path = "dashboard" element = {<DashboardLayout/>} >
       <Route path="profile" element = {<Profile/>}/>
       <Route path="orders" element={<Orders/>}/>
       <Route path="settings" element = {<Settings/>}/>
      </Route>
      <Route path="*" element = {<NotFound/>}/>
    </Route>
  ))
  return (
    <RouterProvider router= {router}/>
  )
}
export default App;