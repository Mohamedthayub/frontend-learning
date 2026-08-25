import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom";
import RootLayout from "./layout/Rootlayout";
import ContactLayout from "./layout/Contactlayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import NotFound from "./components/NotFound";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path="products" element = {<Products/>}/>
        <Route path="about" element = {<About/>}/>
        <Route path="contact" element = {<ContactLayout/>}>
           <Route path="info" element = {<ContactInfo/>}/>
           <Route path="form" element = {<ContactForm/>}/>
        </Route>
        <Route path="*" element = {<NotFound/>}/>

      </Route>
    )
  )
  return (
    <RouterProvider router = {router}/>
  )
}
export default App;