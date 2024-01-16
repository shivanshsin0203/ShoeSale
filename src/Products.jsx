import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';
import Title from './components/utils/Title';
import Item from './components/utils/Item';
const Products = () => {
  
    const [items, setItems] = useState([]);
    async function getProducts() {
      try {
        const response = await axios.get('http://localhost:3005/test');
        const updatedItems = response.data.data.items.map((item) => ({
          ...item,
          img: `http://localhost:5173/src${item.img}`,
        }));
        setItems(updatedItems);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    useEffect(()=>{
        getProducts();
    },[]);
    
   
  return (
    <>
    <Navbar />
    <Cart />
    <div className=' bg-gradient-to-b from-red-500 to-red-600 w-full h-[130px] flex flex-col justify-center items-center space-y-1 nike-container '>
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
    <div className={'flex flex-row justify-between p-6 items-center w-full h-[70px] border-t-2 border-b-2 border-slate-200'}>
      <div className='w-[78px]  border-2 border-slate-300 hover:border-black hover:scale-110 hover:transition-all hover:duration-75 p-1 cursor-pointer hover:p-2 bg-pi'>Filter</div>
      <div className='w-[78px]  border-2 border-slate-300 hover:border-black hover:scale-110 hover:transition-all hover:duration-75 p-1 cursor-pointer hover:p-2'>Sort By</div>
    </div>
    <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7  grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 nike-container`}>
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={false} />
          ))}
        </div>
        <div className=' mt-5'>
        <Footer footerAPI={footerAPI} />
        </div>
    </>
  )
}

export default Products