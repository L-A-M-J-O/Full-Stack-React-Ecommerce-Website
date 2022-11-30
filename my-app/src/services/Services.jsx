import React from 'react'
import '../services/Services.css'

import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import serviceData from '../assets/Data/serviceData';
import icon from '../assets/img/icon.png';

export const Services = () => {
  return (
    <section  className='services'>
        <Container>
            <Row>
                {
                    serviceData.map((element,index) => (
                        <Col lg='4' md='4' className='p-3' key={index}>
                            <motion.div whileHover={{scale: 1.05}}>
                                <a href="" className="card">
                                    <img src={element.icon} className="card__image" alt="" />
                                    <div className="card__overlay">
                                        <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                                        <img className="card__thumb" src={icon} alt="" />
                                            <div className="card__header-text">
                                                <h3 className="card__title">{element.title}</h3>            
                                                <button className="btn__reserva">Reserva</button>
                                                <button className="btn__carta">Nuestra Carta</button>
                                                <button className="btn__menu">Menú del día</button>
                                            </div>
                                        </div>
                                        <p className="card__description">{element.subtitle}</p>
                                    </div>
                                </a>  
                            </motion.div>    
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}
