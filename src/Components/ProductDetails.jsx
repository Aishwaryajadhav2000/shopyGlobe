import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Products from './Products';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

// Product Details display all info about Product
export default function ProductDetails() {

    const params = useParams();
    const { allProducts, error, loading } = Products();

    const bookDetails = allProducts.filter(product => product.id == params.id)
    console.log("bookdetail", bookDetails)


    const dispatch = useDispatch()
    function addToCart(item) {
        dispatch(addItem(item))
    }

    return (
        <>
            <div className=''>
                {loading ? (
                    <p className='text-blue-700 text-center flex justify-center mt-10 text-2xl font-bold'>
                        Loading Products...
                    </p>

                ) : error ? (
                    <p className='text-red-800 text-center flex justify-center mt-10 text-2xl font-bold'>
                        {error}
                    </p>
                ) :
                    bookDetails.length === 0 ? (
                        <p className='text-red-800 text-center flex justify-center mt-10 text-2xl font-bold'>
                            No products Found
                        </p>
                    ) :
                        (bookDetails.map((product) => (

                            <section className=''>

                                <h3 className="text-3xl font-bold title text-blue-900 ">{product.title}</h3>

                                <section className=' border-4 productDetails'>
                                    <article>
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
                                        />
                                    </article>

                                    <article key={product.id} className='p-10 detail'>

                                        {/* <p className="text-gray-600">Discount - {product.discountPercentage}%</p> */}


                                        <p className='text-xl' > <b> {product.title} : {product.category}</b> </p>
                                        <p >{product.description}</p><br />
                                        <p>brand : <b>{product.brand}</b></p>
                                        <p>Policy : <b>{product.returnPolicy}</b></p>
                                        <p>Warranty : <b>{product.warrantyInformation}</b></p>

                                        <p>Ratings :
                                            <b>
                                                {product.rating}
                                            </b>
                                        </p>
                                        <p>
                                            Reviews :
                                            <ol className='list-decimal pl-5'>
                                                {product.reviews?.map((review, index) => (
                                                    <li key={index}>
                                                        <p>Review From : {review.reviewerEmail}
                                                            <ul className='list-disc pl-5 text-red-700'>
                                                                <li>Reviewer Name : {review.reviewerName}</li>
                                                                <li>Comment :{review.comment}</li>
                                                                <li>Rating : {review.rating}</li>
                                                            </ul>

                                                        </p>

                                                    </li>
                                                ))}
                                            </ol>

                                        </p>
                                        <p>Price : <b > {product.price} (<b className='text-red-500'>{product.discountPercentage}% OFF</b> )</b></p>

                                        {/* Add to cart Button and redirect to cart page */}
                                        <Link to={'/cart'}>
                                            <button onClick={() => addToCart(product)}
                                                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                                Add to Cart
                                            </button>
                                        </Link>

                                    </article>
                                </section>


                            </section>




                        )))

                }
            </div>
        </>
    )
}
