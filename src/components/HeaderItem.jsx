import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className='text-white flex items-center gap-3 
      font-semibold hover:underline decoration-2 cursor-pointer underline-offset-8 mb-2'>
        <Icon/>
        <h2 className={'sm:text-[0px] md:text-[13px] lg:text-[15px]'}>{name}</h2>
    </div>
  )
}

export default HeaderItem