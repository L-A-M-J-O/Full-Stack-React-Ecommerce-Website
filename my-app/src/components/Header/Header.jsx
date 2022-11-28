import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { Row, Container} from 'reactstrap'

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
                <li className='nav__item'>
                  <NavLink>Home</NavLink>
                </li>
                <li className='nav__item'>
                  <NavLink>Online</NavLink>
                </li>
                <li className='nav__item'>
                  <NavLink>Restaurant</NavLink>
                </li>
                <li className='nav__item'>
                  <NavLink>Sushis</NavLink>
                </li>
              </ul>
            </div>
            <div className='nav__icons'>
              <span className='cart__icon'>
                <i class="ri-shopping-bag-3-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}
