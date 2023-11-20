    import React from 'react'
import  century from './../assets/images/century.jpg'
import disney from './../assets/images/disney.jpg'
import marvel from './../assets/images/marvel.jpg'
import national from './../assets/images/national.jpg'
import pixar from './../assets/images/pixar.jpg'

import centuryV from './../assets/videos/20th Century Fox Intro HD (720p).mp4'
import disneyV from './../assets/videos/Disney Intro Full HD 1080p (1080p).mp4'
import marvelV from './../assets/videos/Marvel Opening Theme (1080p).mp4'
import nationalV from './../assets/videos/national geographic intro (1080p).mp4'
import pixarV from './../assets/videos/Pixar Intro HD 1080p (720p).mp4'


function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:century,
            video:centuryV
        },
        {
            id:2,
            image:disney,
            video:disneyV
        },
        {
            id:3,
            image:marvel,
            Video:marvelV
        },
        {
            id:4,
            image:national,
            Video:nationalV
        },
        {
            id:5,
            image:pixar,
            video:pixarV
        }
    ]
  return (
    <div className={'product flex gap-2 md:gap-5 p-2 px-5 md:px-16'}>
        {productionHouseList.map((item)=>(
            <div className={'border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'}>
                {/* <video src={item.video} autoPlay loop playsInline className=' w-full
                 h-[250px] w-[250px]] absolute bottom-0 rounded-md opacity:0 z-0 hover:opacity-50 shadow-xl shadow-gray-800' /> */}
                <img src={item.image}  className={'h-full object-cover hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer  rounded-lg z-[1]'} />
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse