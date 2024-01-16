import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import Title from './components/utils/Title';
const Products = () => {
    const [img,setImg]=useState('');
    
    async function getProducts(){
        const response=await axios.get('http://localhost:3005/test');
        console.log(response.data.data.items[2].img);
        console.log(response.data)
        setImg(response.data.data.items[7].img);
    }

    useEffect(()=>{
        getProducts();
    },[]);
   
  return (
    <>
    <Navbar />
    <Cart />
    <div className=' bg-gradient-to-b from-red-500 to-red-800 w-full h-[130px] flex flex-col justify-center items-center space-y-1 nike-container '>
       <h1 className=' text-white uppercase font-semibold mt-8'>FLAT 40% OFF | END OF THE SEASON SALE</h1>
       <h3 className=' text-white uppercase font-semibold'>+ EXTRA 5% OFF ON PREPAID ORDERS</h3>
    </div>
    <div className='flex mt-5 p-8 space-x-4 '>
      <h3 className=' text-black font-semibold cursor-pointer '>Home </h3>
      <h5 className=' text-slate-400'>. Products</h5>
    </div>
    <div className=' p-5'>
    <Title title={"Products List"} />
    </div>
     <div className=' flex flex-row justify-between p-3 items-center w-full h-[70px] border-1 border-red-400'>
      <div className=' w-9 h-6'>Filter</div>
      <div></div>
     </div>
    </>
  )
}

export default Products