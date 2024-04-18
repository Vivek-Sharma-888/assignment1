
import {Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Order from './pages/order/Order'

function App() {
  
  return (
    <>
      
      <Routes>
       <Route path='/' element={<Home />} exact />
        <Route path="/order" element={<Order />} exact />
      </Routes>
    </>
  )
}

export default App
