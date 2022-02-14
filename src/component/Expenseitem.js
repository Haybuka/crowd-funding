import React from 'react'
import '../Expenseitem.css'
function Expenseitem() {
    const expenseDate = new Date(2021,2,28)
  return (
    <div className='expense-item'>
        <div>March 28th</div>
        <div className='expense-item_description'>
            <h2 >Car Insurance</h2>
            <p className='expense-item_price'> $435.44</p>
        </div>
    </div>
  )
}

export default Expenseitem