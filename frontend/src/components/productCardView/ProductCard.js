import React from 'react'
import './ProductCard.scss'

export const ProductCard = (props) => {
  const formattedPrice = new Intl.NumberFormat('es-AR').format(props.price);

	return (
		<section className="card-container">
			<img src={props.picture} alt="Imagen de producto" />

			<div className="card-body">
				<h3>$ { formattedPrice }</h3>
				{ props.freeShipping && 
					<p className="card-free-shipping">Envío gratis</p>
				}
				<p>{ props.title }</p>
			</div>
		</section>
	);
}

export default ProductCard