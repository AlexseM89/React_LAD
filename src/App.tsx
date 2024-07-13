import MyButton from "./components/MyButton/MyButton"
import Profile from "./components/Profile/Profile"
import Product from "./components/Product/Product"
import ProductCatalog from "./components/ProductCatalog/ProductCatalog"
function App() {
//  const products = [
//   {
//     id: 1,
//     title: "Имя продукта 1"
//   },
//   {
//     id: 2,
//     title: "Имя продукта 2"
//   },
//   {
//     id: 3,
//     title: "Имя продукта 3"
//   }
//  ]
const products = [{
  id:1,
  name: "Наручные часы мужские SKMEI 1251",
  imageUrl: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
  price: 8165,
  discount: 90,
  rating: 4.7,
  isFavorite: true
},{
  id:1,
  name: "Наручные часы мужские SKMEI 1251",
  imageUrl: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
  price: 8165,
  discount: 90,
  rating: 4.7,
  isFavorite: true
}]
//  const product = {
//   id:1,
//   name: "Наручные часы мужские SKMEI 1251",
//   imageUrl: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
//   price: 8165,
//   discount: 90,
//   rating: 4.7,
//   isFavorite: true
// }
//  const productList = products.map(product => (
//   <li key={product.id}>
//     <a href="">{product.title}</a>
//   </li>
//  ))
//  const productList2 = products.map(product => (
//   <li key={product.id}>
//     <a href="">{product.title}</a>
//   </li>
//  ))

  return (
    <>
      <ProductCatalog products={products}/>
      <MyButton/>
      <div onClick={()=>{alert("Клик на див")
      }} 
      onClickCapture={()=>{
        alert("Клик на див  Cupture")
      }}
      style={{
        width: "200px",
        height: "200px",
        border: "1px solid red"
      }}>
        <button onClick={(event)=>{
          alert("клик на кнопку")
          event.stopPropagation()
        }}>КнопКа</button>
      </div>
    {/* <Product product={product}/> */}
    {/* <Product/> */}
    {/* {productList}
    {productList2} */}
    </>
  )
}

export default App
