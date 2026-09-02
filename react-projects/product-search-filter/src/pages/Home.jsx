import products from "../utils/productData";
import Cart from "../components/Cart";
import Shimmer from "../utils/Shimmer";
import { useEffect, useState } from "react";
const Home = () => {
    const [input,setInput] = useState("");
    const [cartData ,setCartData ] = useState([]);
    const [cartData2,setCartData2] = useState([]);
    useEffect(() => {
        setCartData(products);
        setCartData2(products);
    },[]);
    const filter  = () => {
        const filterData = cartData2.filter((cart) => cart.title == input);
        setCartData(filterData);
    }
    return (
        <div>
            <div className="input-container">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={filter}>Search</button>
            </div>
            <div className="product-list-container">
                {
                   cartData.length == 0 ? <Shimmer/> : cartData.map((item) => {
                        return (
                            <Cart cartData = {item} key={item.id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Home;