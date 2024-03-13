import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Products from './components/Products/Products'

function App() {

  const [carts, setCarts] = useState([])

  const handleSelect = (product) => {
    const alreadyExist = carts.find(cart => cart.id === product.id);
    if (!alreadyExist) {
      const newCarts = [...carts, product];
      setCarts(newCarts);
    }
    else{
      alert('This course is already add to cart');
    }
  }
  return (
    <>
      <h1 className='text-4xl text-center font-bold'>Course Registration</h1>
      <div className='w-4/5 mx-auto flex justify-between my-10 gap-5'>
        <Products
          handleSelect={handleSelect}
        ></Products>
        <Carts
          carts={carts}
        ></Carts>
      </div>

    </>
  )
}

export default App
