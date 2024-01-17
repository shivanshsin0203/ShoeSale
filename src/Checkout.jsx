import React from 'react'
import { Link } from 'react-router-dom';
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
import { Navbar, Footer, Cart } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';
import Title from './components/utils/Title';
const Checkout = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const totalAmount = useSelector(selectTotalAmount);
    const totalQTY = useSelector(selectTotalQTY);
    const user=useSelector(selectUser);
  return (
    <>
    <Navbar />
    <Cart/>
    <div className='bg-gradient-to-b from-red-500 to-red-600 w-full h-[130px] sm:[200px] flex flex-col justify-center items-center space-y-1 '>
        <h1 className='text-white uppercase font-semibold mt-8 sm:mt-[80px]'>FLAT 40% OFF | END OF THE SEASON SALE</h1>
        <h3 className='text-white uppercase font-semibold'>+ EXTRA 5% OFF ON PREPAID ORDERS</h3>
      </div>
      <div className='flex mt-5 p-8 space-x-4 '>
        <Link to='/products'>
        <h3 className='text-black font-semibold cursor-pointer '>Products </h3></Link>
        <h5 className='text-slate-400'>. Checkout</h5>
      </div>
      {/* Title */}
      <div className='p-5 flex space-x-2 items-center'>
        <Title title={"My Shoping Cart"} />
        <span className=' text-3xl font-extralight'>{`[${totalQTY}]`}</span>
      </div>
      <div className='flex space-x-5 w-full lg:flex-col'>
        <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3 w-1/2 lg:w-full">
            {cartItems?.map((item, i) => (
            <CheckoutItem key={i} item={item} />
            ))}
        </div>

        <div className='flex-grow'>
            <div className=' border-t-2 border-b-2 border-slate-300 flex justify-between items-center p-3 sm:hidden'>
                <p className=' text-lg font-bold'>Name : <span className=' text-sm font-semibold'>{`${user.displayName}`}</span></p>
                <p className=' text-lg font-bold'>Name : <span className=' text-sm font-semibold'>{`${user.email}`}</span></p>
            </div>
            <div className='border-t-2 border-b-2 border-slate-300 flex flex-col p-3 mt-4 '> 
               <div className=' flex space-x-[120px] justify-between'>
                <span className=' text-gray-500 font-sm'>Subtotal </span>
                <span  className=' text-gray-500 font-sm font-semibold'>₹{totalAmount*82}</span>
               </div>
               <div className=' flex  space-x-[80px] justify-between'>
               <span className=' text-gray-500 font-sm'>Shipping Cost </span>
                <span  className=' text-gray-500 font-sm'>₹0</span>
               </div>
            </div>
            <div className=' flex  space-x-[80px] justify-between mt-7 px-3'>
            <span className=' text-xl text-black-500 font-bold'>Grand Total </span>
                <span  className=' text-xl text-black font-semibold'>₹{totalAmount*82}</span>
            </div>
            <div className=' px-2 mt-5'>
            <button type="button" className="button-theme bg-theme-cart text-white text-xl w-full h-[58px]" >Pay Now</button>
            </div>
        </div>
        </div>

     <div className='mt-5'>
        <Footer footerAPI={footerAPI} />
      </div>
    </>
  )
}

export default Checkout