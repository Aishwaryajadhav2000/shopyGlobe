import React from 'react'
import Products from './Products'
import { Link, useOutletContext } from 'react-router-dom';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

// Product Item Component  display each product

export default function ProductItem() {
    const { category, searchText } = useOutletContext()

    const { allProducts, error, loading } = Products({ category, searchText });
    console.log("all", allProducts)

    const dispatch = useDispatch()
    function addToCart(item) {
        dispatch(addItem(item))
    }

    const filteredBySearch = allProducts.filter(products =>
        products.title.toLowerCase().includes(searchText.trim().toLowerCase())
    );


    return (
        <>
            <div className='bodyspace'>
                {/* Loading */}
                {loading ? (
                    <p className='text-blue-700 text-center flex justify-center mt-10 text-2xl font-bold'>
                        Please Wait...Loading Products
                    </p>

                ) : error ? (
                    <p className='text-red-800 text-center flex justify-center mt-10 text-2xl font-bold'>
                        {error}
                    </p>
                ) :
                // If input value in search input incorrect
                    filteredBySearch.length === 0 ? (
                        <div className='text-red-800 flex flex-col items-center justify-center text-center text-2xl font-bold h-screen'>
                            <p className=''>Product not found : {searchText} </p> <br />
                            <p className=''> Please enter a correct product name.</p>
                            <Link to={'/'} className='text-white'>
                                <button onClick={()=>window.location.reload()} className='px-4 py-3 rounded-lg mt-4
                                              bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-purple-400 hover:to-indigo-600'>
                                    Back to Home
                                </button>
                            </Link>

                        </div>
                    ) :
                        (filteredBySearch.map((product) => (
                            // Redirect to productDetails
                            <Link to={`/details/${product.id}`}>
                                <div key={product.id} className='border-4 productsCard'>
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="w-30 h-40 object-cover rounded-md mb-2"
                                    />
                                    <h3 className="text-lg font-semibold">{product.title}</h3>
                                    <p className="text-gray-600">${product.price}</p>
                                    
                                    {/* Add to cart and redirect to cart page */}
                                    <Link to={'/cart'}>
                                        <button onClick={() => addToCart(product)}
                                            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                            Add to Cart
                                        </button>
                                    </Link>

                                </div>
                            </Link>

                        )))

                }
            </div>
        </>
    )
}
