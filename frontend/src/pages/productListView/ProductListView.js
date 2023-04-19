import React, { useEffect, useState } from 'react';
import './ProductListView.scss';
import ProductList from '../../components/productList/ProductList';
import Navbar from '../../components/navbar/Navbar';
import { Global } from '../../global/global';

export const ProductListView = () => {
  const [searchValue, setSearchValue] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsDetails()
  }, [searchValue]);

  const getProductsDetails = async () => {
    setSearchValue(window.location.href.split('=')[1]);
    const request = await fetch(Global.url + 'items/' + searchValue, {
      method: "GET"
    });
    const data = await request.json();
    setProducts(data.items);
  }

  return (
    <>
      <Navbar />
      <ProductList dataProd={products} />
    </>
  )
}

export default ProductListView;

