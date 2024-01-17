import React from "react";

import { useDispatch } from "react-redux";
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from "../../app/CartSlice.js";

const CheckoutItem = ({ item: { id, title, text, img, color, shadow, price, cartQuantity } }) => {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(setRemoveItemFromCart({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  const onIncreaseItemQTY = () => {
    dispatch(setIncreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }
  const onDecreaseItemQTY = () => {
    dispatch(setDecreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  return (
    <>
      <div className="flex items-center justify-between w-full px-5 h-[155px] border-2">
        <div className="flex items-center gap-5">
          <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
            <img src={img} alt={`img/cart-item/${id}`} className="w-36 h-auto object-fill lg:w-28" />
            <div className='absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded'>${price}</div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">{title}</h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
            <span className=" text-lg font-medium">Quantity :</span>
              <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">
               
                {cartQuantity}</div>
              
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">${price * cartQuantity}</h1>
          </div>
          <div className="grid items-center justify-center">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
