import React from 'react'
import search from '../images/search.png'
import sort from '../images/Sort.png'
import download from '../images/download.png'
import green from '../images/Ellipse 23.png'
import black from '../images/Ellipse 2.png'

const TransactionTable = () => {
  return (
    <div className='w-full h-[508px] mt-[40px]  '>
        <div className='w-full h-[84px] m-[24px] flex flex-col justify-between'>
        <h3 className='font-semibold'>Transaction | This Month</h3>

      <div className='flex w-[241px] h-[32px] justify-between'>
 <div className= 'bg-[#E6E6E6]  rounded-2xl  w-[111px] h-[32px] pt-[6px] pr-[16px] pb-[6px] pl-[16px]'><p className=' text-[14px] text-gray-500'>Payouts(22)</p></div>            
<div className='bg-[#146EB4] rounded-2xl w-[111px] h-[32px] pt-[6px] pr-[16px] pb-[6px] pl-[16px] '> <p className='text-[14px] text-white' >Refunds(6)</p></div>        
      </div>


    
        </div>
<div>
</div>

<div className='max-w-full h-[400px] pt-[12px] pr-[12px] pb-[8px] pl-[12px] shadow-md shadow-top'>
    <div className='max-w-full h-[92px] m-[12px] '>

 <div className='flex justify-between'>
        <div>
        <div className="relative flex items-center">
     
     <input
       type="text"
       placeholder="Order id or transaction id"
       className="w-[248px] h-[40px] pt-[10px] pr-[16px] pb-[10px] pl-[30px] border border-gray-300 rounded-md"
     />
        <img
       src={search}
       alt="Search"
       className=" w-[16px] h-[16px] absolute left-2 top-1/2 transform -translate-y-1/2 "
     />
   </div>
    </div>

<div className='w-[131px] h-[36px] flex items-center justify-evenly'>
<div className=' flex items-center  border  border-gray-400 justify-between m-[12px] w-[79px] h-[36px] p-[4px] rounded-md'>
    <p className='text-[16px] w-[33px] h-[24px]'>Sort</p>
    <img className='w-[14px] h-[14px]' src={sort} alt='sort'/>
    
</div>

<div className=' border border-[#D9D9D9] w-[36px] h-[36px] flex items-center rounded-md'>
    <img className='w-[20px] h-[20px] m-[5px]' src={download} alt='download' />
</div>
</div>


</div>
<div className='max-w-full h-[40px] pt-[5px] pr-[12px] pb-[10px] pl-[12px] bg-[#f2f2f2] mt-[8px] '>
    <ul  className='flex justify-between items-center'>
    <li className='text-[14px]'>Order ID</li>
    <li className='text-[14px]'>Status</li>
    <li className='text-[14px]'>Transaction ID</li>
    <li className='text-[14px]'>Refund date</li>
    <li className='text-[14px]'>Order amount</li>
    </ul>
    </div>
</div>

<div className='max-w-full h-[40px] pt-[14px] pr-[12px] pb-[14px] pl-[12px] border-b border-gray-300 '>
    <ul  className='flex justify-between items-center'>
    <li className='text-[14px] text-[#146EB4]'>#281209</li>
    <li className='text-[14px] flex items-center'><span><img className='w-[10px] h-[10px] mr-[3px]' src={green} alt='green' /></span>Successful</li>
    <li className='text-[14px]  w-[150px] h-[20px]   '>131634495747</li>
    <li className='text-[14px]'>Today,   08:45 PM</li>
    <li className='text-[14px]'>₹1,125.00</li>
    </ul>
    </div>


    <div className='max-w-full h-[40px] pt-[14px] pr-[12px] pb-[10px] pl-[12px] border-b border-gray-300 '>
    <ul  className='flex justify-between items-center'>
    <li className='text-[14px] text-[#146EB4]'>#281208</li>
    <li className='text-[14px] flex items-center'><span><img className='w-[10px] h-[10px] mr-[3px]' src={black} alt='green' /></span>Proccessing</li>
    <li className='text-[14px]   w-[150px] h-[20px]            '>131634495747</li>
    <li className='text-[14px]'>Yesterday,  03:00 PM</li>
    <li className='text-[14px]'>₹1,125.00</li>
    </ul>
    </div>



    <div className='max-w-full h-[40px] pt-[14px] pr-[12px] pb-[14px] pl-[12px] border-b border-gray-300  '>
    <ul  className='flex justify-between items-center '>
    <li className='text-[14px] text-[#146EB4]'>#281207</li>
    <li className='text-[14px] flex items-center'><span><img className='w-[10px] h-[10px] mr-[3px]' src={green} alt='green' /></span>Successful</li>
    <li className='text-[14px]  w-[150px] h-[20px]        '>131634495747</li>
    <li className='text-[14px]'>12 Jul 2023,03:00PM</li>
    <li className='text-[14px]'>₹1,125.00</li>
    </ul>
    </div>


    <div className='max-w-full h-[40px] pt-[14px] pr-[12px] pb-[14px] pl-[12px] border-b border-gray-300 '>
    <ul  className='flex justify-between items-center'>
    <li className='text-[14px] text-[#146EB4]'>#281206</li>
    <li className='text-[14px] flex items-center'><span><img className='w-[10px] h-[10px] mr-[3px]' src={green} alt='green' /></span>Successful</li>
    <li className='text-[14px]  w-[150px] h-[20px]    '>131634495747</li>
    <li className='text-[14px]'>12 Jul 2023,03:00 PM</li>
    <li className='text-[14px]'>₹1,125.00</li>
    </ul>
    </div>


    <div className='max-w-full h-[40px] pt-[14px] pr-[12px] pb-[14px] pl-[12px] border-b border-gray-300  '>
    <ul  className='flex justify-between items-center'>
    <li className='text-[14px] text-[#146EB4]'>#281205</li>
    <li className='text-[14px] flex items-center'><span><img className='w-[10px] h-[10px] mr-[3px]' src={green} alt='green' /></span>Successful</li>
    <li className='text-[14px] w-[150px] h-[20px]'>131634495747</li>
    <li className='text-[14px]'>12 Jul 2023,03:00 PM</li>
    <li className='text-[14px]'>₹1,125.00</li>
    </ul>
    </div>


    <div className='max-w-full h-[40px] pt-[14px] pr-[12px] pb-[14px] pl-[12px] '>
    <ul  className='flex justify-between items-center'>
    <li className='text-[14px] text-[#146EB4]'>#281204</li>
    <li className='text-[14px] flex items-center'><span><img className='w-[10px] h-[10px] mr-[3px]' src={green} alt='green' /></span>Successful</li>
    <li className='text-[14px]  w-[150px] h-[20px]     '>131634495747</li>
    <li className='text-[14px]'>12 Jul 2023,03:00 PM</li>
    <li className='text-[14px]'>₹1,125.00</li>
    </ul>
    </div>





</div>
    </div>
  )
}

export default TransactionTable