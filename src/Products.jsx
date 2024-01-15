import React, { useState,useEffect } from 'react'
import axios from 'axios';
import img1 from './assets/nike-adapt-bb-smart.png'
const Products = () => {
    const [img,setImg]=useState('');
    async function getProducts(){
        const response=await axios.get('http://localhost:3005/test');
        console.log(response.data.data.items[2].img);
      
        setImg(response.data.data.items[8].img);
    }

    useEffect(()=>{
        getProducts();
    },[]);
   
  return (
    <>
    <div>Products</div>
    <img src={`http://localhost:5173/src/${img}`} alt="image" />
    </>
  )
}

export default Products