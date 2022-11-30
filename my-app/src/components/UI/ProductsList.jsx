import React from 'react'
import ProductCard from './ProductCard'
const ProductsList = ({data}) => {
  return (
    <>
        {data?.map((element) => (
            <ProductCard element={element}/>
        ))}
    </>
  )
}

export default ProductsList