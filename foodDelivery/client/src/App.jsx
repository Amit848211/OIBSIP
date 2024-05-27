import { useState } from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Card from './pages/Card'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './component/Footer'
import Login from './component/Login'
import Payment from './component/Payment'
import Verify from './pages/Verify'
import MyOrders from './pages/MyOrders'






function App() {
  const [count, setCount] = useState(0)
  const[showLogin,setshowLogin] = useState(false)

  return (
    <>
    <div className='relative'>
    {showLogin?<Login setlogin={setshowLogin}/>:<></>}
    <BrowserRouter>
    <Navbar setlogin={setshowLogin} />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Card />}/>
          <Route path='/order' element={<PlaceOrder />}/>
          <Route path='/payment' element={<Payment />}/>
          <Route path='/verify'  element={<Verify />}/>
          <Route path='/myorders' element={<MyOrders />}/>
          
          
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
