import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';

// Display Cart Items in list
export default function Cart() {

  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items)

  console.log("cart items", items)
  return (
    <>
      <CartItem products={items}></CartItem>

    </>
  )
}
