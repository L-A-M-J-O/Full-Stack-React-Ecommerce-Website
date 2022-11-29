import React from 'react'

import Helmet from '../components/Helmet/Helmet';

import { Container, Row, Col  } from 'reactstrap';

export const Home = () => {

  const year = new  Date().getFullYear();
  return <Helmet title={'Home'}>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero__content'>
              <p className='hero_subtitle'>Nuestra historia {year}</p>
              <h2>Kanbun es fusión, es innovación.</h2>
              <p>Se trata de una Taberna Oriental llena de historia, en la que generaciones de experiencia y devoción por la buena gastronomía se han unido para acercar a tu paladar los sabores más auténticos de Oriente y Occidente.</p>
              <button>20% DTO PEDIDOS ONLINE</button>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src='' alt=''/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet> 
}
