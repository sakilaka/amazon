import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';

const Orders = () => {
    const { products, carts } = useLoaderData();
    const [cart, setCart] = useState(carts);

    const clearCart = () =>{

        setCart([]);
        deleteShoppingCart();
    }

    const handleDeleteItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div className='shop'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        btn={handleDeleteItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No item for review.Please <Link to='/'>Shop here.</Link></h2>
                }
            </div>
            <div className="carts">
                <Cart cart={cart} clear={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;