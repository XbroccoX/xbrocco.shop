import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import close from '@icons/icon_close.png'
import AppContext from '../context/AppContext';
const OrderItem = ({ product }) => {

	const { removeFromCart } = useContext(AppContext);
	const handdleClose = (payload) => {
		removeFromCart(payload)
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.category.name}</p>
			<p>${product.price}</p>
			<img
				src={close}
				alt="close"
				className='close'
				onClick={() => handdleClose(product)}
			/>
		</div>
	);
}

export default OrderItem;
