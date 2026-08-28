import { useLoaderData} from "react-router-dom";
const ProductDetails = () => {
    const productData = useLoaderData();
    return (
        <div className="product-detail-container">
            <h1  className="product-heading">Product Details Page</h1>
            <div className="btn-container">
                <img src={productData?.image} className="product-image"></img>
            </div>
            <h2 className="product-name">{productData.title}</h2>
            <h3 className="product-price">Price : ₹{productData.price}</h3>
            <h3 className="product-rating">{productData?.rating?.rate} Stars</h3>
            <div className="btn-container">
                <p className="product-description">{productData.description}</p>
            </div>
            <div className="btn-container">
                <button className="btn">Buy Now</button>
            </div>
        </div>
    )
}
export default ProductDetails;

export const productDetailsLoader = async ({params}) => {
    const {id} = params;
    const res  = await fetch('https://fakestoreapi.com/products/'+ id);
    if(!res.ok){
        throw Error("could not find the prorduct");
    }
    return res.json();
}