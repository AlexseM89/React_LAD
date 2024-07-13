import { FC } from "react"
import { IProduct } from "../../types/products"
import Product from "../Product/Product"
import Row from "../Row/Row"

interface ProductCatalogProps {
    products: IProduct[]

}

const ProductCatalog: FC<ProductCatalogProps> =({products})=>{
    const handleAddCart =()=>{
        alert("Добавло в корзину")
    }
    const handeToggleFavorite=()=>{
        alert("Изменено избранное")
    }
    return (<Row>
        {products.map((product)=> (<Product product={product} onAddCart={handleAddCart} onToggleFavorite={handeToggleFavorite}/>))}
    </Row>
)}
export default ProductCatalog