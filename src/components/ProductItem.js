const ProductItem = ({item}) => {
    return (
        <div className='p-box'>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <a className='price' href="#">Rs.{item.price}/-</a>
            <a className='buy-btn' href="#">Add To Cart</a>
        </div>
    )
}

export default ProductItem;