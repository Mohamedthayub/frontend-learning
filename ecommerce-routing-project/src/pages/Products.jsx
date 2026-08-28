import {Link,useLoaderData} from "react-router-dom";
const Products = () => { 
    const products = useLoaderData();
    return  (
        <div>
            <h1 className="product-heading">Products Page</h1>    
            <div className="cart-container">
            {products.map((job) => {
                return <Link key={job.id} className="cart" to={`${job.id}`}>
                <img src={job?.image} className="product-image"></img>
                <h4 className="product-name">{job?.title}</h4>
                <h5 className="product-price"> ₹{job?.price}</h5>
                <p className="product-rating">{job?.rating?.rate} Stars</p>
                </Link>
            })}
        </div>
        </div>
    )
}
export default Products;

export const getProducts = async () => {
       const response = await fetch('https://fakestoreapi.com/products/');
       if(!response.ok){
        throw Error("product not Found");
       }
       const data  = await response.json();
       return data
}