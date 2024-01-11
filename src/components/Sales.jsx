/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Item from './utils/Items.jsx'
import Title from './utils/Title' 

const Sales = ({ endpoint: { title, items } }) => {
  // console.log(endpoint)
  return (
   <>
      <div className='nike-container'>
        <Title title={title} />
        <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 `}>
          {items?.map((item, i) => (
            <Item {...item} key={i} />
          ))}
        </div>
      </div>
   </>
  )
}

export default Sales