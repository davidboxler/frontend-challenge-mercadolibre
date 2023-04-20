import React, { useEffect, useState } from 'react';
import ProductList from '../../components/productList/ProductList';
import Navbar from '../../components/navbar/Navbar';
import { Global } from '../../global/global';

export const ProductListView = () => {
  const searchValue = window.location.href.split('=')[1];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsDetails()
  }, [searchValue]);

  const getProductsDetails = async () => {
    const request = await fetch(Global.url + 'items/search/' + searchValue, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
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

