import React from 'react';
import '../../styles/Product-Card.css';

import add from '../../assets/img/add.png';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Col } from 'reactstrap';

const ProductCard = () => {
  return (
    <Col lg='3' md='4'>
        <div className='product__item'>
            <div className="product__img">
                <motion.img whileHover={{scale: 0.9}} src='https://flipdish.imgix.net/6BVxqdcu9UvzgZS1E18X3AOUI38.jpg?auto=format&fit=crop&w=112&h=112&dpr=1' alt=''/>
            </div>
            <div className='p-2 product__info'>
                <h3 className="product__name"><Link to='/shop/id'>Lorem, ipsum dolor.</Link></h3>
                <span className='text-center d-block'>lorem</span>
            </div>
            <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                <span className="price">$600</span>
                <motion.span whileHover={{scale: 1.1}}>
                    <img src={add} alt='add'/>
                </motion.span>
            </div>
        </div>
    </Col>
  )
}

export default ProductCard