import React from 'react'
import {Link} from 'react-router-dom';
import Rating from './Rating';

export default function Products(props) {
	const {product} = props;
	return (
		<div key={product._id} className="card">
             <Link to={`/product/${product._id}`}>
              <img className="medium" src={product.image} alt={product.name} />
             </Link>
             <div className="card-body">
              <Link to={`/product/${product._id}`}>
                     <h3>{product.name}</h3>
              </Link>
              <Rating 
              	rating={product.rating} 
              	numReviews={product.numReviews}
              	></Rating>
              <div className="price">${product.price.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</div>
             </div>
         </div>
	);
}