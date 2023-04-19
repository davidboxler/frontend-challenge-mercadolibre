import React from 'react'
import './ProductList.scss'
import Container from '@material-ui/core/Container';
import ProductCardList from '../productCardList/ProductCardList';
import CircularProgress from '@material-ui/core/CircularProgress';

export const ProductList = ({dataProd}) => {
  console.log(dataProd)
  return (
    <>
      <Container maxWidth="lg" className={'containerBody'}>
        <main>
          {dataProd ? (
            <div>
              {dataProd.map((product) => <ProductCardList key={product.id} data={product} />)}
            </div>
          ) : (
            <CircularProgress />
          )}
        </main>
      </Container>
    </>
  )
}

export default ProductList