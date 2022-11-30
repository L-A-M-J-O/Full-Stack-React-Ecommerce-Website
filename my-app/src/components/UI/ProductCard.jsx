import React from 'react';
import productsImg from '';

const ProductCard = () => {
  return (
    <div className='product__item'>
        <div className="product__img">
            <img src='' alt=''/>
        </div>
        <h3 className="product__name">Lorem, ipsum dolor.</h3>
        <span>lorem</span>
        <div className="product__card-bott">
            <span className="price">$600</span>
            <span></span>
        </div>
    </div>
  )
}

export default ProductCard