import React from 'react';
import '../styles/ProductInfo.scss';
import addToCar from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
	const bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
	return (
		<>
			<img src={bike} alt="bike" />
			<div className="ProductInfo">
				<p>$35,00</p>
				<p>Bike</p>
				<p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
				<button className="primary-button add-to-cart-button">
					<img src={addToCar} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;
