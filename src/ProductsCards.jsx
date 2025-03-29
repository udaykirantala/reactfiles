import "./ProductsCards.css"

function Singledata(){
    return(<h1>ProductsDetails</h1>)
}

function ProductsCards(props){
return(
    <>
    <div className="productscard">
        <img src={props.image} alt={props.name}/>
        <p>{props.name}</p>
        <p>Price<span>{props.price}</span></p>
        <p>Discounted Price {props.Discprice}</p>
        <p>Description{props.description}</p>
    </div>
    </>
)
}
export default ProductsCards;
export {Singledata};