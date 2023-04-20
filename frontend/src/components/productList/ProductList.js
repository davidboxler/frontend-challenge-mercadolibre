import React from 'react'
import './ProductList.scss'
import ProductCardList from '../productCardList/ProductCardList';
import { CircularProgressbar } from 'react-circular-progressbar';

export const ProductList = ({dataProd}) => {
  return (
    <>
      <div className='containerBody'>
          {dataProd ? (
            <div>
              {dataProd.map((product) => <ProductCardList key={product.id} data={product} />)}
            </div>
          ) : (
            <CircularProgressbar />
          )}
      </div>
    </>
  )
}

export default ProductList