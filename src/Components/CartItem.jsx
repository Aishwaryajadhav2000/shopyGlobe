import React from 'react'
import { removeItem, clearCart } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

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
    const confirmation = window.confirm("Want to remove Product ?")
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
          <section className='bodyspace'>
            <div className="clrbtn">
              <h1>Total Products - {products.length}</h1>
              <button className='add-cartbtn' onClick={clearCarts}>Clear Cart</button>
            </div>
            <section className='cart'>
              <section className='cartsection'>
                {
                  products.map((product) => (

                    <article className='cartItem2'>
                      <div className='remove'>
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

                  <div>
                    <div className='flex justify-between p-20 border bg-white m-10'>
                      <h1>Total Amount</h1>
                      <p> ${totalPrice}</p>
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
