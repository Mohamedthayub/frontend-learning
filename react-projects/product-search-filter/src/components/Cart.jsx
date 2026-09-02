const Cart = ({cartData}) => {
    console.log(cartData);
    return (
        <div className="cart">
            <img src="" alt=""  className="cart-image"/>
            <h3 className="cart-brand">{cartData.title}</h3>
            <h4>{cartData.category}</h4>
            <h4>{cartData.price}</h4>
            <h5>{cartData.rating} Stars</h5>
        </div>
    )
}
export default Cart;