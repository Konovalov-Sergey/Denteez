import React from 'react';

import { Link } from 'react-router-dom';

function Product(props) {
	return (
		<div className="product-content">
			<h4><Link to="/">{props.name}</Link></h4>
			<div className="product-item">
				<Link to="/">
					<span 
						className="img"
						style={props.style}>
					</span>
				</Link>
				<div className="right">
					<h5>{props.product}</h5>
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
}

export default Product;