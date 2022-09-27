import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name , img , seller , price , ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="p-info">
                <p className='name'>{name}</p>
                <p>Price : ${price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Ratings : {ratings}</small></p>
            </div>
            <button onClick={()=>props.btn(props.product)} className='btn-cart'>
                <p>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        
        </div>
    );
};

export default Product;