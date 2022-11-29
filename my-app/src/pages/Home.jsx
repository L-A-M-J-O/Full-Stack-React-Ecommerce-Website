import React from 'react'
import '../styles/Home.css'

import Helmet from '../components/Helmet/Helmet';

import { Container, Row, Col  } from 'reactstrap';
import heroVideo from '../assets/video/hero.mp4';

export const Home = () => {

  const year = new  Date().getFullYear();
  return <Helmet title={'Home'}>
    <section className='hero__section'>
      <div className='content'>
        <video autoPlay muted>
          <source src={heroVideo} type='video/mp4'/>  
        </video>
        <div className='gradient'></div>
      </div>
      <Container>
        <Row>
          <Col lg='8' md='6'>
            <div className='hero__content'>
              <p className='hero_subtitle'>Nuestra historia {year}</p>
              <h2><i>Kanbun es fusión, <br/> es innovación.</i></h2>
              <p>Se trata de una Taberna Oriental llena de historia, en la que generaciones de experiencia y devoción por la buena gastronomía se han unido para acercar a tu paladar los sabores más auténticos de Oriente y Occidente.</p>
              <button className='shop__btn'>20% DTO PEDIDOS ONLINE</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet> 
}
