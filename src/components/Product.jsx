import React from 'react';

import { Link } from 'react-router-dom';

function Product(props) {
	return (
		<div className="product-content">
			<h4>{props.name}</h4>
			<div className="product-item">
				<Link to="/">
					<span 
						className="img"
						style={props.style}>
					</span>
				</Link>
				<ul className="right">
					<li>
						<Link to="">{props.product}</Link>
					</li>
					<li>
						<Link to="">{props.description}</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Product;