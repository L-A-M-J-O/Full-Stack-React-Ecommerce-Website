import React from 'react';
import './Header.css';

import { NavLink } from 'react-router-dom';
import { Row, Container} from 'reactstrap';
import { motion } from 'framer-motion'


import menu from '../../assets/img/menu.png';
import fav from '../../assets/img/fav.png';
import user from '../../assets/img/user.png';
import bag from '../../assets/img/bag.png';
const nav__links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  }
]
export const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className='logo'>
              <img src='' alt='logo'/>
              <div>
                <h1>KANBUN</h1>
                <p>Asian restaurant</p>
              </div>
            </div>
            <div className='navigation'>
              <ul className='menu'>
                {
                  nav__links.map((element, index) => (
                    <li className='nav__item' key={index}>
                      <NavLink to={element.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{element.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className='nav__icons'>
              <span className='cart__icon'>
                <img src={fav} alt='fav'/>
                <span className='badge'>1</span>
              </span>
              <span className='cart__icon'>
                <img src={bag} alt='bag'/>
                <span className='badge'>1</span>
              </span>
              <span className=''>
                <motion.img whileTap={{scale: 1.2 }} src={user} alt='user'/>
              </span>
            </div>
            <div className="mobile__menu">
              <span>
                <img src={menu} alt='menu'/>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}
