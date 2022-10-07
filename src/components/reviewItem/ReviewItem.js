import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product , btn}) => {
    const {id, quantity, name, price, img, shipping } = product;
    return (
        <div className='reviewItem'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="reviewContainer">
                <div className="details">
                    <h5>{name}</h5>
                    <p>price : {price}</p>
                    <p>quantity : {quantity}</p>
                    <p>Shipping : {shipping}</p>
                </div>
                <div className="delete">
               <button onClick={() => btn(id)}><FontAwesomeIcon className='delete-icon' icon={ faTrash }></FontAwesomeIcon></button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;