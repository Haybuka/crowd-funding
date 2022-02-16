import React from 'react'
import '../styles/Button.css'
function ModalButton(props) {
    const {backgroundColor,color,value,currency,disabled} = props
    const btn = {
        backgroundColor,
        color,
    }
   
  return (
    <button style={btn} className='btn' disabled={disabled ? true : false}>
         {currency}{value}
    </button>
  )
}

export default ModalButton