import './App.css'
import ProductsCards , {Singledata} from './ProductsCards';
import BluetoothSperker from "./assets/Bluetooth Speaker.jpg";
import Fintnesband from "./assets/Fitness Band.jpg"
import GamingMouse from "./assets/Gaming Mouse.jpg"
import Headphones from "./assets/headphones.jpg"
import SmarttTV from "./assets/Smart TV.jpg"
import WirelessEarPhones from "./assets/Wireless Keyboard and Mouse.jpg"

function App() {
  const products = [
    {
      name: "Wireless Bluetooth Headphones",
      image: BluetoothSperker,
      price: 79.99,
      discountedPrice: 59.99,
      description: "High-quality wireless headphones with noise cancellation and 30-hour battery life."
    },
    {
      name: "Smart Fitness Band",
      image: Fintnesband,
      price: 49.99,
      discountedPrice: 39.99,
      description: "Track your steps, heart rate, and sleep patterns with this sleek fitness band."
    },
    {
      name: "Gaming Mouse",
      image: GamingMouse,
      price: 39.99,
      discountedPrice: 29.99,
      description: "Ergonomic gaming mouse with customizable RGB lighting and six programmable buttons."
    },
    {
      name: "Portable Bluetooth Speaker",
      image: Headphones,
      price: 99.99,
      discountedPrice: 79.99,
      description: "Waterproof and shockproof Bluetooth speaker with deep bass and 12-hour battery life."
    },
    {
      name: "4K Ultra HD Smart TV",
      image: SmarttTV,
      price: 499.99,
      discountedPrice: 429.99,
      description: "Experience stunning 4K visuals with built-in streaming apps and voice control."
    },
    {
      name: "Wireless Keyboard and Mouse Combo",
      image: WirelessEarPhones,
      price: 69.99,
      discountedPrice: 54.99,
      description: "Compact wireless keyboard and mouse set with long battery life and quiet keys."
    }
  ];  
  return (
    <>
    <Singledata/>
  <div className='productscards'>
      {products.map((item)=>{
        return <ProductsCards  name= {item.name} image={item.image} price={item.price} Discprice={item.discountedPrice} description={item.description} />
      })}
  </div>
    </>
  )
}

export default App
