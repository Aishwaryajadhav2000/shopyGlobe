import React from 'react'
import { removeItem, clearCart } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// CartItem Component to display each product detail
export default function CartItem({ products }) {
  console.log("cartitems", products)

  const totalPrice = products.reduce((total, products) => total + products.price, 0)

  const dispatch = useDispatch();

  function Remove(item) {
    const confirmation = window.confirm("Want to remove Product ?")
    if (confirmation) {
      dispatch(removeItem(item))
    }
  }
  function clearCarts() {
    const confirmation = window.confirm("Want to remove All Product ?")
    if (confirmation) {
      dispatch(clearCart())
    }
  }

  return (
    <>
      {
        products.length === 0 ? (
          <section className='mt-20 text-3xl text-red-600 font-bold '>
            <p className='flex justify-center'>YOUR CART IS EMPTY...</p><br /><br />
            <p className='flex justify-center'>
              {/* Redirect to Home page */}
              <Link to={'/'}>
                <button className='px-6 py-3 rounded-lg mr-3
                  animate-bounce bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-purple-400 hover:to-indigo-600'>
                  Click Here
                </button>
              </Link>
              To Add Your Favourite Products in Cart
            </p>
          </section>

        ) : (
          <section className='cartBodyspace h-screen'>
            <div className="clrbtn">
              {/* Redirect to Home Page */}
              <Link to={'/'}>
                <button className='backtoHome '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                  </svg>
                  Back</button>
              </Link>
              <h1>Total Products - {products.length}</h1>
              <button className='add-cartbtn' onClick={clearCarts}>Clear Cart</button>
            </div>
            <section className='cart'>
              <section className='cartsection'>
                {
                  products.map((product) => (

                    <article className='cartItem2'>
                      <div className='remove'>
                        {/* Remove Icon to remove the particular item from cart */}
                        <button onClick={() => Remove(product)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                          </svg>
                        </button>
                      </div>

                      <div className='cartItem'>
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="w-30 h-40 object-cover rounded-md mb-2"
                        />
                        <h1>{product.title}</h1>
                        <h1>${product.price}</h1>
                      </div>

                    </article>

                  ))
                }
              </section>

              <section className='totalCart'>


                <article className='total'>

                  <div className='p-20 border bg-white m-10'>
                    <div className='flex justify-between '>
                      <h1>Total Amount</h1>
                      <p> ${totalPrice}</p>
                    </div>
                    <br />
                    <div className='text-center'>
                      {/* Redirect to Place order page */}
                      <Link to={'/checkout'}>
                        <button className="mt-3 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
                          Checkout
                          </button>
                      </Link>
                    </div>


                  </div>

                </article>
              </section>
            </section>


          </section>
        )
      }



    </>
  );
}
