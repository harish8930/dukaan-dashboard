import React from 'react'
import menu1 from '../images/Menu1.png'
import menu from '../images/Menu.png'
import search from '../images/search.png'
import help from '../images/Help.png'


const Header = () => {
  return (
    <div className='w-full h-[64px] flex justify-between pt-[12px] pr-[32px] pb-[12px] pl-[32px] shadow-md'>

        <div className='w-[360px] h-[28px] flex items-center '>
        <h1 className='w-[81px] h-[28px] font-semibold text-[20px]'>Payouts</h1>
       <img  className="w-[14px] h-[14px]"  src={help} alt='help' /><p className='w-[94px] h-[16px] text-[12px] font-thin leading-4 text-[#4D4D4D]'>How it works</p>
        </div>

         <div className="relative flex items-center">
     
      <input
        type="text"
        placeholder="Search features, tutorial, etc."
        className="w-[400px] h-[40px] pt-[9px] pr-[16px] pb-[9px] pl-[40px] border border-gray-300 rounded-md"
      />
         <img
        src={search}
        alt="Search"
        className=" w-[16px] h-[16px] absolute left-2 top-1/2 transform -translate-y-1/2 "
      />

    </div>

<div className='flex gap-[8px]'>
<img className='w-[40px] h-[40px]' src={menu1} alt='menu'/>
<img className='w-[40px] h-[40px]' src={menu} alt='menu'/>
</div>


    </div>
  )
}

export default Header