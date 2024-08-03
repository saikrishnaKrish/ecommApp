import './index.css'
import {NavLink, Link } from 'react-router-dom'
const Header = (props)=>{

    // A <Link> is an element that lets the user navigate 
    // to another page by clicking or tapping on it.
    //  In react-router-dom, a <Link> renders an accessible 
    //  <a> element with a real href that points to the resource
    //      it's linking to. This means that things like right-clicking 
    //      a <Link> work as you'd expect. You can use <Link reloadDocument>
    //       to skip client side routing and let the browser 
    // handle the transition normally (as if it were an <a href>).

        const {username} =props

   return <div className="header">

        <h2>{username}</h2>
        <NavLink className={({isActive})=>isActive && "active"} 
        to="/">Tech TechNoWorld</NavLink>
        <NavLink className={({isActive})=>isActive && "active"} 
         to={"/dashboard"}> Dashboard</NavLink>
        <NavLink  className={({isActive})=>isActive && "active"}
        to={"/counter"}> Counter</NavLink>
        <NavLink className={({isActive})=>isActive && "active"}
         to={"/login"}> Login</NavLink>
        <NavLink className={({isActive})=>isActive && "active"} 
         to={"/signup"}>  Singup </NavLink>
        <NavLink className={({isActive})=>isActive && "active"}
        to={"/contactus"}>  Contact Us </NavLink>

    </div>
}

export default Header

