import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, clearCart } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Checkout() {
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    const [orderConfirm, setOrderConfirm] = useState(false)

    const navigation = useNavigate();
    const dispatch = useDispatch();

    function placeOrder() {
        dispatch(clearCart())
        // navigation("/")
        setOrderConfirm(true)
    }

    return (
        <>
            {
                orderConfirm == false ? (
                    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">

                        {
                            cartItems.length === 0 ? (
                                <div className='flex items-center justify-center'>
                                    <Link to={'/'}>
                                        <button className='px-6 py-3 rounded-lg mr-3
                                                animate-bounce bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-purple-400 hover:to-indigo-600'>
                                            Click Here
                                        </button>
                                    </Link>
                                    To Add Items and place the order
                                </div>
                            ) : (
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">Confirm Order</h2>

                                    {/* Cart Items checkout */}
                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold mb-4">Your Orders</h3>
                                        <ul className="space-y-4">
                                            {cartItems.map((item, index) => (
                                                <li key={index} className="flex justify-between items-center border-b pb-2">
                                                    <span>{item.title}</span>
                                                    <span className="font-semibold">${item.price}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-4 text-right font-bold text-lg">
                                            Total: ${totalPrice.toFixed(2)}
                                        </div>
                                    </div>

                                    {/* Customer Information */}
                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold mb-4">Shipping Details</h3>
                                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input className="border p-2 rounded" type="text" placeholder="Full Name" required />
                                            <input className="border p-2 rounded" type="email" placeholder="Email" required />
                                            <input className="border p-2 rounded" type="number" placeholder="Phone" required />
                                            <input className="border p-2 rounded" type="text" placeholder="Address" required />
                                            <input className="border p-2 rounded md:col-span-2" type="text" placeholder="City, State, Zip" required />
                                        </form>
                                    </div>

                                    {/* Place Order Button */}

                                    <button onClick={placeOrder} className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 font-semibold">
                                        Place Order
                                    </button>
                                </div>
                            )
                        }



                    </div>
                ) : (
                    // Display message after checkout
                    <div className='bg-blue-500 h-screen items-center flex justify-center'>

                        <p className='border-4 border-double p-12 font-bold text-3xl text-white'>
                           
                            Order Place Successfully <br />
                            <Link to={'/'}>
                                <button className='px-6 py-3 rounded-lg mr-3 mt-4
                                     bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-purple-400 hover:to-indigo-600'>
                                     Back To Home
                                </button>
                            </Link>
                        </p>
                    </div>
                )
            }
        </>

    );
}
