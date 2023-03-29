import React,{useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images.js';
import './Navbar.css';
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return(
  <nav className="app__navbar">
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo"/>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a hreaf="#home">Home</a></li>
      <li className='p__opensans'><a hreaf="#about">About</a></li>
      <li className='p__opensans'><a hreaf="#menu">Menu</a></li>
      <li className='p__opensans'><a hreaf="#awards">Awards</a></li>
      <li className='p__opensans'><a hreaf="#contact">Contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#login" className='p__opensans'>Log In / Register</a>
    <div/>
    <a href="/ " className='p__opensans'>Book Table</a>   
    </div>
    <div className="app__navbar-smallscreen">
        <GiHamburgerMenu  cursor="pointer" color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu &&(
          
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen-links">
              <li ><a href="#home" onClick={() => {}}>Home</a></li>
              <li ><a href="#about" onClick={() => {}}>About</a></li>
              <li ><a href="#menu" onClick={() => {}}>Menu</a></li>
              <li ><a href="#awards" onClick={() => {}}>Awards</a></li>
              <li ><a href="#contact" onClick={() => {}}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
  </nav>
)
}

export default Navbar;
