import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element = {<RootLayout/>}>
      <Route index element = {<Home/>}/>
      <Route path ="about" element = {<About/>}/>
      <Route path="products" element = {<Products/>}/>
      <Route path="contact" element = {<Contact/>}/>
    </Route>
  ))
  return (
    <RouterProvider router = {router}/>
  )
}
export default App;