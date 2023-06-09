import ProductItems from "../components/ProductItems";

const Products = () => {
    return (
        <div className='product'>
            <div className='p-heading'>
                <h3>New Organic Products</h3>
            </div>
            <div className='product-container'>
                <ProductItems />
            </div>
        </div>
    )
}

export default Products;