import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const clearCart = () =>{

        setCart([]);
        deleteShoppingCart();
    }


    useEffect(() => {
        const storeCart = getStoredCart();
        const savedCart = [];
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            setCart(savedCart);
        }

    }, [products]);


    const handleAddToCart = (selectedProduct) => {
        //    console.log(product);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        btn={handleAddToCart}>
                    </Product>)
                }
            </div>
            <div className="carts">
                <Cart cart={cart} clear={clearCart}>
                    <Link to='/order'>
                        <button>Review Here</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;