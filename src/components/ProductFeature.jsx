import React from 'react';
import { Link } from 'react-router-dom';

import Product from './Product';

import Img1 from '../img/product-img_1.png';
import Img2 from '../img/product-img_2.png';

const img1 = {
	background: `url(${Img1}) no-repeat`
}
const img2 = {
	background: `url(${Img2}) no-repeat`
}

function ProductFeature(props) {
	return (
		<div className="product">
			<div className="product-name">
				<h3>Featured Products</h3>
				<Link to="/" className="right">See All</Link>
			</div>
			<div>
				<Product 
					name="Product Name"
					style={img1}
					product="Product Short  Description."
					description="The quick brown  fox jumps over the lazy dog."
				/>
				<Product 
					name="Product Name"
					style={img2}
					product="Product Short  Description."
					description="The quick brown  fox jumps over the lazy dog."
				/>
			</div>
		</div>
		
	);
}

export default ProductFeature;