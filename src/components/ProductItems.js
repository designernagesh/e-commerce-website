import ProductsData from '../data/ProductsData';
import ProductItem from './ProductItem';

const ProductItems = () => {
    return (
        ProductsData.map((item, i) => {
            return (
                <ProductItem item={item} key={i} />
            )
        })        
    )
}

export default ProductItems;