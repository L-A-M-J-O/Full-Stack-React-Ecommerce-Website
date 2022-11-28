import { Routes, Route, Navigate} from 'react-router-dom'

import {Home} from '../pages/Home';
import {Card} from '../pages/Card';
import {Shop} from '../pages/Shop';
import {Signup} from '../pages/Signup';
import {Login} from '../pages/Login';
import {ProductDetail} from '../pages/ProductDetail';
import {Checkout} from '../pages/Checkout';

 function Router(){
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='shop/:id' element={<ProductDetail/>}/>
      <Route path='card' element={<Card/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Routes>
  )
}
export default Router;
