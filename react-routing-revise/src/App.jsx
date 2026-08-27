import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="container"> 
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/products" element = {<Products/>}/>
          <Route path="/contact" element = {<Contact/>}/>
        </Routes>
      </div>
    </div>
  )
}
export default App;