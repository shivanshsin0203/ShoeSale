/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Clip from './utils/Clips'
import SocialLink from './utils/SocialLink'
// eslint-disable-next-line react/prop-types
const Hero = ({heroapi:{title,subtitle,btntext,img,sociallinks,videos}}) => {
    
  return (
    <div className=' relative h-auto w-auto flex flex-col '>
        <div className=' bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute
         top-0 left-0 right-0 opacity-100 z-10'></div>
        <div className=' relative opacity-100 z-20 grid items-center justify-items-center mt-28 md:mt-24 nike-container'>
            <div className=' grid items-center justify-items-center mt-28 md:mt-24'>
            <h1 className=' text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-extrabold filter drop-shadow-sm text-slate-200'>{title}</h1>
            <h1 className=' text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-extrabold filter drop-shadow-sm text-slate-200'>{subtitle}</h1>
            <button className=' button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5'>{btntext}</button>
            <div className=' grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto '>
                {videos.map((val,i)=>(
                    <Clip 
                    key={i}
                    imgsrc={val.imgsrc}
                    clip={val.clip}/>
                     
                ))}
            </div>
            <div className=' grid items-center absolute top-[33vh] lg:top[27vh] right-0 gap-3'>
                {sociallinks?.map((val,i)=>(
                    <SocialLink
                     key={i}
                     icon={val.icon}
                    />
                ))}
            </div>
            </div>
            <div>
                <img src={img} alt='hero-img' 
                className=' w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] transition-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill'>
                </img>
            </div>
        </div>
    </div>
  )
}

export default Hero