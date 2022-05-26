import React, { useState, useContext } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext';
import addToCartStyle from '@icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {

	const { addToCart } = useContext(AppContext)

	const handleClick = (item) => {
		addToCart(item);
	}
	if (product.images.length !== 1) {
		return (
			<div className="ProductItem">
				<img src={product.images[0]} alt={product.title} />
				<div className="product-info">
					<div>
						<p>${product.price}</p>
						<p>{product.category.name}</p>
					</div>
					<figure>
						<img
							src={addToCartStyle}
							alt="addToCartStyle"
							onClick={() => handleClick(product)}
						/>
					</figure>
				</div>
			</div>
		);

	} else {
		return (
			<></>
		)
	}


}

export default ProductItem;
