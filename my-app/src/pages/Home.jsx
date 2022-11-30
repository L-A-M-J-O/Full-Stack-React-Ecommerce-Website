import React, {useState, useEffect} from 'react'
import '../styles/Home.css'

import plato from '../assets/img/plato.png';

import { Link } from 'react-router-dom'
import { Container, Row, Col  } from 'reactstrap';
import foods from '../assets/Data/foods';

import {Clock} from '../components/UI/Clock';
import Helmet from '../components/Helmet/Helmet';
import ProductsList from '../components/UI/ProductsList';

import heroVideo from '../assets/video/hero.mp4';
import { Services } from '../services/Services';

export const Home = () => {
  
  const [comidas, setComidas] = useState([]);
  const [cenas, setCenas] = useState([]);
  const year = new  Date().getFullYear();

  useEffect (() => {
    const filterComidas = foods.filter(element => element.category === 'chair');
    const filterdCenas = foods.filter(element => element.category === 'sofa');

    setComidas (filterComidas);
    setCenas (filterdCenas);
  }, []);

  return <Helmet title={'Home'}>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero__content'>
              <p className='hero_subtitle'>Nuestra historia {year}</p>
              <h2><i>Kanbun es fusión, <br/> es innovación.</i></h2>
              <p>Se trata de una Taberna Oriental llena de historia, en la que generaciones de experiencia y devoción por la buena gastronomía se han unido para acercar a tu paladar los sabores más auténticos de Oriente y Occidente.</p>
              <button className='shop__btn'><Link className='link__a' to='shop'>20% DTO PEDIDOS ONLINE</Link></button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <video autoPlay muted>
              <source src={heroVideo} type='video/mp4'/>  
            </video>
          </Col>
        </Row>
      </Container>
    </section>

    <Services/>

    <section className='trending__products'>
      <Container>
        <Row>
          <Col lg='12'  className='text-center mb-5'>
            <h2 className='section__title'>Comidas</h2>
          </Col>
          <ProductsList data={comidas}/>
        </Row>
      </Container>
    </section>

    <section className='best__sales'>
      <Container>
        <Row>
          <Col lg='12'  className='text-center mb-5'>
            <h2 className='section__title'>Cenas</h2>
          </Col>
          <ProductsList data={cenas}/>
        </Row>
      </Container>
    </section>

    <section className='timer__count'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='clock__top-content'>
              <h4>Limited Offers</h4>
              <h3>Quality Armchair</h3>
            </div>
            <Clock/>
            <button className='buy__btn store__btn'><Link>Visit Store</Link></button>
          </Col>
          <Col lg='6' md='6' className='text-end'>
            <img className='plato' src={plato} alt='img'/>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet> 
} 
