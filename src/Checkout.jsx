import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals,
  selectUser
} from "./app/CartSlice.js";
import CheckoutItem from './components/cart/CheckoutItem.jsx';
const Checkout = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const totalAmount = useSelector(selectTotalAmount);
    const totalQTY = useSelector(selectTotalQTY);
    const user=useSelector(selectUser);
  return (
    <>
     <div className='felx flex-row space-x-3 w-full'>
      <div className=' w-1/2'>
      <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
              {cartItems?.map((item, i) => (
                <CheckoutItem key={i} item={item} />
              ))}
            </div>
      </div>
      <div className=' w-1/2'>
        </div>
     </div>
    </>
  )
}

export default Checkout