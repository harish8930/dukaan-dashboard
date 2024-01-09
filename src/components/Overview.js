import React from 'react'
import arrowdown from '../images/Path 2 Copy.png'
import helpw from '../images/Helpw.png'
import rightarrow from '../images/Chevron Right.png'
import brightarrow from '../images/Chevron rblue.png'


const Overview = () => {
  return (
    <div>
   <div className=' max-w-full h-[36px] flex justify-between m-[24px] flex-grow '>
    <h2 className='font-semibold text-[20px]'>Overview</h2>
    <div className='w-[137px] h-[36px] border border-solid border-gray-300 border-1 flex justify-center items-center'>
      <p className='w-[87px] h-[24px] text-[16px]'>This Month</p>
    <img className='w-[12px] h-[7px] ' src={arrowdown} alt='down' />
    </div>
    </div>



<div className='w-full h-[154px]  flex justify-between'>

<div className='w-[370px] h-[154px] p-[20px] m-[16px] bg-[#146EB4] rounded-lg '>

   <div className='flex items-center'>
    <p className='text-white'>Next Payout</p>
    <img className=' text-white w-[16px] h-[16px] m-[8px]' src={helpw} alt='help'/>
    </div>

<div className='flex items-center justify-between'>
<div><p className='text-[32px] text-white'>₹2312.23</p></div>

<div className='flex items-center'>
<p className='text-[16px] text-white underline'>23 orders</p>
<img  className="w-[24px] h-[24px]" src={rightarrow} alt='arrow'/></div>
</div>

<div className='flex w-[370px] bg-[#0E4f82] pt-[8px] pr-[24px] pb-[8px] pl-[24px] justify-between text-white relative right-5 top-5 rounded-lg'>
<p className='text-white text-[14px] '>Next Payout date</p>
<p className='text-[14px]'>Today,4:00PM</p>
</div>

</div>

<div className='w-[370px] h-[118px] m-[16px] shadow-md'>
  <div className='w-[330px] h-[78px] m-[16px]'>
  <p className='text-[16px]'>Amount Pending</p>

  <div className='flex w-[330px] h-[38px]  justify-between items-center'>
  <h3 className='text-[32px] font-semibold'>₹92,312.20</h3>

  <div className='flex items-center w-[94px] h-[24px]'> 
  <p className='text-[16px]  underline text-[#1463B4]'>13 orders</p>
  <img className='w-[24px] h-[24px]' src={brightarrow} alt='arrow' />
  </div>
  </div>

  </div>
</div>




<div className='w-[370px] h-[118px]  m-[16px] shadow-md'>
  <div className='w-[330px] h-[78px] m-[16px]'>
  <p className='text-[16px]'>Amount processed</p>
  <h3 className='text-[32px] font-semibold'>₹23,92,312.19</h3>
  </div>
</div>


</div>










</div>





    
  )
}

export default Overview