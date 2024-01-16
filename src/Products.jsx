// Import necessary dependencies and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cart, Navbar, Footer } from './components';
import Title from './components/utils/Title';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';
import Item from './components/utils/Item';
import FilterDialog from './components/utils/FilterDialogbox'; // Import the FilterDialog component

const Products = () => {
  const [items, setItems] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showFilterDialog, setShowFilterDialog] = useState(false);

  // Function to fetch products from the server
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

  // Fetch products on component mount
  useEffect(() => {
    getProducts();
  }, []);

  // Handle changes when brand checkboxes are clicked
  const handleBrandCheckboxChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands((prevBrands) => prevBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands((prevBrands) => [...prevBrands, brand]);
    }
    console.log(selectedBrands)
  };

  // Show the filter dialog
  const handleFilterButtonClick = () => {
    setShowFilterDialog(true);
  };

  // Close the filter dialog
  const handleFilterDialogClose = () => {
    setShowFilterDialog(false);
  };

  // Filter items based on selected brands
  const filteredItems = items.filter((item) =>
    selectedBrands.length === 0 ? true : selectedBrands.includes(item.brand)
  );

  return (
    <>
      <Navbar />
      <Cart />
      {/* Hero section */}
      <div className='bg-gradient-to-b from-red-500 to-red-600 w-full h-[130px] sm:[200px] flex flex-col justify-center items-center space-y-1 '>
        <h1 className='text-white uppercase font-semibold mt-8 sm:mt-[80px]'>FLAT 40% OFF | END OF THE SEASON SALE</h1>
        <h3 className='text-white uppercase font-semibold'>+ EXTRA 5% OFF ON PREPAID ORDERS</h3>
      </div>
      {/* Breadcrumbs */}
      <div className='flex mt-5 p-8 space-x-4 '>
        <h3 className='text-black font-semibold cursor-pointer '>Home </h3>
        <h5 className='text-slate-400'>. Products</h5>
      </div>
      {/* Title */}
      <div className='p-5'>
        <Title title={"Products List"} />
      </div>
      {/* Filter and Sort options */}
      <div className='flex flex-row justify-between p-6 items-center w-full h-[70px] border-t-2 border-b-2 border-slate-200'>
        <div
          className='w-[78px] border-2 border-slate-300 hover:border-black hover:scale-110 hover:transition-all hover:duration-75 p-1 cursor-pointer hover:p-2 bg-pi'
          onClick={handleFilterButtonClick}
        >
          Filter
        </div>
        <div className='w-[78px] border-2 border-slate-300 hover:border-black hover:scale-110 hover:transition-all hover:duration-75 p-1 cursor-pointer hover:p-2'>Sort By</div>
      </div>
      {/* Product grid */}
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7  grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 nike-container`}>
        {filteredItems?.map((item, i) => (
          <Item {...item} key={i} ifExists={false} />
        ))}
      </div>
      {/* Footer */}
      <div className='mt-5'>
        <Footer footerAPI={footerAPI} />
      </div>

      {/* Render FilterDialog component */}
      {showFilterDialog && (
        <FilterDialog
          selectedBrands={selectedBrands}
          onBrandCheckboxChange={handleBrandCheckboxChange}
          onClose={handleFilterDialogClose}
        />
      )}
    </>
  );
}

export default Products;