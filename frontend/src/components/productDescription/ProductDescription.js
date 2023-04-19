import React from 'react';
import './ProductDescription.scss';

export const ProductDescription = ({description}) => {
	return (
		<section>
			<hr className="product-details-hr" />
			<h2 className="product-details-subtitle">Descripcion</h2>
			<p className="product-description">{description}</p>
		</section>
	)
}

export default ProductDescription