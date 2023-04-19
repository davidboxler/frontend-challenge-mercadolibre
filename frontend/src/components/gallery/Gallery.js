import React from 'react';
import './Gallery.scss';

export const Gallery = ({ picture }) => {
	return (
		<section>
			<div className="gallery-container">
				<div className="image">
					<img src={picture} alt="Imagen del producto" />
				</div>
			</div>
		</section>
	)
}

export default Gallery