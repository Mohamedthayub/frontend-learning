import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";
import {Routes,Route} from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/products" element ={<Products/>}/>
          <Route path="/contact" element = {<Contact/>}/>
        </Routes>
      </div>
    </div>
  )

}
export default App;