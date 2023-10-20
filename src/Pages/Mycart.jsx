import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authprovider/Authprovider';
import Cartadded from '../componets/Cartadded';

const MyCart = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (user && user?.uid) {
            fetch(`https://coffe-store-server-2x8ec96r6-abirahmmed12s-projects.vercel.app/get-cart?id=${user?.uid}`)
                .then(res => res.json())
                .then((data) => {
                    console.log(data, 'cartData');
                    setCartItems(data);
                })
                .catch((error) => {
                    console.error('Error fetching cart items:', error);
                });
        }
    }, [user]);

    return (
        <div className='max-w-screen-xl m-auto'>
           

            {cartItems.length === 0 ? (
                <p className='text-center text-5xl text'>Opps! You didn't Add Any Cart Yet!!!</p>
            ) : (
                cartItems.map((item) => <Cartadded key={item.id} item={item} />)
            )}
        </div>
    );
};

export default MyCart;
