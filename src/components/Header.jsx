import React, {useState} from 'react'
import logo from './../assets/images/logo.jpg'
import { HiHome, 
  HiMagnifyingGlass, 
  HiStar, 
  HiPlayCircle, 
  HiTv} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
  const [toggle, setToggle]=useState(false);
  const menu=[
    {
      name:'Home',
      icon:HiHome
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name:'WATCH LIST',
      icon:HiPlus
    },
    {
      name:'ORIGINALS',
      icon:HiStar
    },
    {
      name:'MOVIES',
      icon:HiPlayCircle
    },
    { 
      name:'SERIES',
      icon:HiTv
    }
  ]
  return (
    <div className={ 'flex items-center justify-between p-5  '}>
      <div className='flex gap-8 items-center justify-between '>
        <img src={logo} className='w-[100px] rounded-full
        md:w-[115px] object-cover' />
        <div className='hidden  sm:flex   gap-8 '>
        {menu.map((item)=>(
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
        </div>
        <div className='icon  w-[200px] h-[200px] flex  sm:hidden gap-5'>
        {menu.map((item,index)=>index<3&&(
          <HeaderItem name={''} Icon={item.icon} />
        ))}
        <div className='sm:hidden' onClick={()=>setToggle(!toggle)}>
          <HeaderItem name={''} Icon={HiDotsVertical}/>
          {toggle? <div className='absolute h-[10px] mt-3 bg-[#121212] border-[1px] border-gray700 p-3 px-5 py-100px '>
          {menu.map((item,index)=>index>2&&(
          <HeaderItem name={item.name} Icon={item.icon} />
          ))}
          </div>:null}
        </div>
        </div>
      </div>
      <img src="https://i.pinimg.com/564x/cf/df/3c/cfdf3ca21215622a11ec97501f86df84.jpg" className='  w-[100px] md:w-[100px]   rounded-full' />
    </div>
  )
}

export default Header