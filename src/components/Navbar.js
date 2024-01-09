import React from 'react'
import company from '../images/Image.png'
import arrowdown from '../images/Chevron Down.png'
import home from '../images/Navbar Icon11.png'
import order from '../images/Navbar Icon10.png'
import product from '../images/Navbar Icon9.png'
import delivery from '../images/Navbar Icon8.png'
import marketing from '../images/Navbar Icon7.png'
import analytics from '../images/Navbar Icon6.png'
import payout from '../images/Navbar Icon5.png'
import discount from '../images/Navbar Icon4.png'
import audience from '../images/Navbar Icon3.png'
import appearance from '../images/Navbar Icon2.png'
import plugins from '../images/Navbar Icon.png'
import wallet from '../images/wallet.png'




const Navbar = () => {


  return (
    <div className='flex flex-col h-screen bg-[#1E2640] justify-evenly flex-grow '>

    <div className='w-[192px] h-[42px]  flex justify-between items-center m-[12px]'>

    <div className='flex m-[4px] items-center'>
    <img className='w-[39px] h-[39px] rounded-[4px]' src={company} alt='brand' />

    <div className='w-[108px] h-[42px] m-[10px]'>
     <p className='text-white text-[15px]'>Nishyan</p>
     <p className='text-[13px] text-white underline font-normal'>Visit store</p>
     </div>
     </div>

<div>
<img src={arrowdown} alt='arrow'/>
</div>
    </div>

<div className=' w-[224px] h-[714px] m-[4px]'>
  <ul className='list-none'>
<li className='flex hover:bg-[#353C53] cursor-pointer  text-white text-[14px] w-[208px] h-[36px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] m-[12px]'><img className='mr-[12px]   w-[20px] h-[20px]' src={home} alt='nav'/>Home</li>
<li className='flex  hover:bg-[#353C53] cursor-pointer text-white text-[14px] w-[208px] h-[36px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] m-[12px]'  ><img className=' mr-[12px] w-[20px] h-[20px]'src={order} alt='nav'/>Orders</li>
<li  className='flex  hover:bg-[#353C53] cursor-pointer  text-white text-[14px] w-[208px] h-[36px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] m-[12px]' ><img className='mr-[12px] w-[20px] h-[20px]'src={product} alt='nav'/>Products</li>
<li className=' flex  hover:bg-[#353C53] cursor-pointer text-white text-[14px] w-[208px] h-[36px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] m-[12px]' ><img className='mr-[12px] w-[20px] h-[20px]'src={delivery} alt='nav'/>Delivery</li>
<li  className='  flex  hover:bg-[#353C53] cursor-pointer text-white text-[14px] w-[208px] h-[36px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] m-[12px]' ><img className='mr-[12px]   w-[20px] h-[20px]'src={marketing} alt='nav'/>Marketing</li>
<li  className='  flex  hover:bg-[#353C53] cursor-pointer text-white text-[14px] w-[208px] h-[36px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] m-[12px]'><img className='mr-[12px]    w-[20px] h-[20px]'src={analytics} alt='nav'/>Analytics</li>
<li className=' bg-[#353C53] rounded-lg flex  text-white text-[14px] w-[208px] h-[36px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] m-[12px]'><img className='mr-[12px]   w-[20px] h-[20px]'src={payout} alt='nav'/>Payouts</li>
<li className='flex   hover:bg-[#353C53] cursor-pointer  text-white text-[14px] w-[208px] h-[36px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] m-[12px]'  ><img className='mr-[12px]   w-[20px] h-[20px]'src={discount} alt='nav'/>Discount</li>
<li className='  flex  hover:bg-[#353C53] cursor-pointer text-white text-[14px] w-[208px] h-[36px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] m-[12px]' ><img className='mr-[12px]   w-[20px] h-[20px]'src={audience} alt='nav'/>Audience</li>
<li className='  flex  hover:bg-[#353C53] cursor-pointer  text-white text-[14px] w-[208px] h-[36px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] m-[12px]' ><img className='mr-[12px]   w-[20px] h-[20px]'src={appearance} alt='nav'/>Apperance</li>
<li  className='  flex  hover:bg-[#353C53] cursor-pointer   text-white text-[14px] w-[208px] h-[36px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] m-[12px]'  ><img className='mr-[12px]  w-[20px] h-[20px]'src={plugins} alt='nav'/>Plugins</li>
</ul>
</div>



<div className=' flex  w-[192px] h-[54px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-[#353C53] m-[10px]'>
  <img src={wallet} alt='wallet' />
<div className='w-[101px] h-[42px] m-[2px] '>
  <p className='text-[13px] text-white'>Available Credits</p>
  <h3 className='text-white text-[16px] font-medium'>222.10</h3>
</div>

</div>


    </div>
  )
}

export default Navbar