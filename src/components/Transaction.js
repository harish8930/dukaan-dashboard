import React from 'react'
import Overview from './Overview'
import Header from './Header'
import TransactionTable from './TransactionTable'

const Transaction = () => {
  return (
    <div className='w-full h-[754px] '>
    <Header/>
    <Overview/>
    <TransactionTable/>
    </div>
  )
}

export default Transaction


