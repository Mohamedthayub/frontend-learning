import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import NotFound from "./pages/NotFound";
import Jobs,{getUsers} from "./pages/Jobs";
import JobsLayout from "./layout/JobsLayout";
import Error from "./pages/Error";
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element = {<RootLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/products" element = {<Products/>}/>
        <Route path="contact" element = {<ContactLayout/>}>
           <Route path="info" element = {<ContactInfo/>}/>
           <Route path="form" element = {<ContactForm/>}/>
        </Route>
        <Route path="jobs" element = {<JobsLayout/>} errorElement = {<Error/>}>
         <Route index element ={<Jobs/>} loader= {getUsers}/>
        </Route>
        <Route path="*" element= {<NotFound/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}
export default App;