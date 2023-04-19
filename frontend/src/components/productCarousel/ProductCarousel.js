import React from 'react'
import ProductCard from '../productCardView/ProductCard';
import productImgFour from "../../assets/products/product4.jpg";
import productImgFive from "../../assets/products/product5.jpg";
import productImgSix from "../../assets/products/product6.jpg";
import productImgSeven from "../../assets/products/product7.jpg";
import productImgEight from "../../assets/products/product8.jpg";
import './ProductCarousel.scss'

export const ProductCarousel = () => {
  return (
    <section className="main-container product-carousel">
			<h2 className="product-carousel-title mt-15px">Productos promocionados</h2>

			<div className="products-carousel-container">
				<ProductCard
					title="Las Pistas De Blue Peluche Sonido Y Mov Int Original"
					picture={ productImgFour }
					price={ 14990 }
					freeShipping={ false }
				/>

				<ProductCard
					title="El Perrito De Julieta, Ladra Y Mueve La Cola Cuando Camina!"
					picture={ productImgFive }
					price={ 12800 }
					freeShipping={ true }
				/>

				<ProductCard
					title="Peluche Gigante Cienpies Didactico 1.5 Mts"
					picture={ productImgSix }
					price={ 15600 }
					freeShipping={ false }
				/>

				<ProductCard
					title="Lorito Pepe Granja Zenon Sonido Interactivo Camina Y Repite"
					picture={ productImgSeven }
					price={ 7499 }
					freeShipping={ true }
				/>

				<ProductCard
					title="Perro Mascota Puppy Dog Interactivo Ladra Gru&ntilde;e 2052 Ditoys"
					picture={ productImgEight }
					price={ 8715 }
					freeShipping={ true }
				/>
			</div>
		</section>
  )
}

export default ProductCarousel
