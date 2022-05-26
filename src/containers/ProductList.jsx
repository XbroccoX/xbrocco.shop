import React from 'react';
import useGetProducts from '../hooks/useGetProducts'
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const { products, loading } = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{
					loading && (
						<h1>CARGANDO...</h1>
					)
				}

				{
					products.map(product => (
						<ProductItem product={product} key={product.id} />
					))
				}
			</div>
		</section>
	);
}

export { ProductList };
