import React, { useEffect, useState } from 'react';
import { Global } from '../../global/global';
import { useParams } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import SellerInfo from '../../components/sellerInfo/SellerInfo';
import Information from '../../components/information/Information';
import ProductDescription from '../../components/productDescription/ProductDescription';
import ProductPrice from '../../components/productPrice/ProductPrice';
import Question from '../../components/questions/Questions';
import ProductFeatures from '../../components/productFeatures/ProductFeatures';
import SellerPosts from '../../components/sellerPosts/SellerPosts';
import Navbar from '../../components/navbar/Navbar';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import './ProductDetails.scss';
import Gallery from '../../components/gallery/Gallery';

export const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    getProductsDetails()
  }, [])

  const getProductsDetails = async () => {
    const id = params.id
    const request = await fetch(Global.url + 'items/' + id, {
      method: "GET"
    })
    const data = await request.json();
    setProducts(data.item)
    setLoading(false)
  }

  return (
    <main>
      <Navbar />
      <Breadcrumbs categories={products.categories} />
        {loading && !products ? (
          <section
            container
            className={'container-card-details'}
          >
            <CircularProgressbar />
          </section>
        ) : (
          <section className="main-container product-details-grid bg-white">
            <article className="right-column">
              <ProductPrice
                title={products.title}
                price={products.price}
                quantity={products.sold_quantity}
                available={products.available_quantity}
              />
              <SellerInfo address={products.seller_address} />
              <Information />
            </article>
            <article className="left-column">
              <Gallery picture={products.picture} />
              <div className="mx-30px">
                <SellerPosts />
                <ProductFeatures />
                <ProductDescription description={products.description} />
                <Question />
              </div>
            </article>
          </section>
        )}
    </main>
  )
}

export default ProductDetails