import React , { useState} from 'react';
import Logo from '../images/Burger.jpeg';
import { Link } from 'react-router-dom';
import { IoReorderThree } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styls/Navbar1.css";



function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return (
        <div className='navbar'>
            <div className='leftSide' >
                <img src={Logo} alt ="Burger"/>
            </div>
            <div className='rightSide'>
                <Link to='/'> Home </Link>
                <Link to='/about'> About </Link>
                <Link to='/menu'> Menu </Link>
                <Link to='/deals'> Deals </Link>
                <Link to='/contact'> Contact </Link>
                <Link to='/cart' className='shopping-cart-icon'> Cart </Link>
                <AiOutlineShoppingCart classname='cart-trolley' />
                <span className='cart-total--item'>10</span>
                <button onClick={toggleNavbar}>
                    <IoReorderThree/>
                </button>
            </div>   
        </div>
    );
}

export default Navbar;
