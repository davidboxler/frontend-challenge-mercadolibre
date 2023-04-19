import React from 'react'
import ProductCard from "../productCardView/ProductCard";
import Image1 from "../../assets/product1.jpg";
import Image2 from "../../assets/product2.jpg";
import Image3 from "../../assets/product3.jpg";
import "./SellerPosts.scss";

export const SellerPosts = () => {
  return (
    <section>
			<hr className="product-details-hr" />

			<div className="seller-posts-container">
				<h2 className="product-details-subtitle">Publicaciones del vendedor</h2>

				<div className="seller-posts-card-container">
					<ProductCard
						title="Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos"
						price={1090}
						picture={Image1}
					/>

					<ProductCard
						title="Peluche Stitch 55-60cm Importado Lilo Y Stitch Hermosos"
						price={6590}
						picture={Image2}
						freeShipping={true}
					/>

					<ProductCard
						title="Peluche Stitch 80cm Sentado Lilo Disney Importado"
						price={11450}
						picture={Image3}
						freeShipping={true}
					/>
				</div>

				<p className="blue-anchor mt-24px d-inline-block">Ver mas publicaciones del vendedor</p>
			</div>
		</section>
  )
}

export default SellerPosts