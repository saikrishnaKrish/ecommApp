import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainComp from '../MainPage';
import Counter from '../Counter';
import LoginForm from '../LoginForm';
import Signup from '../Signup';
import Dashboard from '../../Pages/Dashboard';
import ContactUs from '../../Pages/ContactUs';
import AboutUS from '../../Pages/AboutUS';
import ProdctDetails from '../ProductDetails';
import PageNotFound from '../../Pages/PageNotFound';
import IuseMemo from '../../hooks/IuseMemo';
import IuseCallback from '../../hooks/useCallback/IuseCallback';

const Layout = () => {
  return (   <Routes>
        <Route path='/' element={<MainComp/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/aboutus' element={<AboutUS/>}/>
        <Route path='/productdetails/:pid' element={<ProdctDetails/>}/>
        <Route path='/useCallback' element={<IuseCallback/>}/>
        
        <Route path='*' element={<PageNotFound/>}/>
        </Routes>)
}

export default Layout