import React from 'react'
import Button from './Button'
import '../styles/Card.css'
function Card({leadText,pledge,text,backgroundColor,color,amntLeft,inStock,modal,handleModal}) {
    let newText;
    if(inStock){
        newText = 'Select Reward'
    }else{
        newText = 'Out of Stocks'
    }
  return (
        <article className={inStock ? 'Card' : 'Card out-of-stock'} onClick={handleModal}>
          <div className='Card-top'>
             <h3>{leadText}</h3>
             <p className='Card-pledge'>Pledge ${pledge} or more</p>
           </div>
        <p className='Card-body text-primary'>
         {text}
        </p>
        <aside className='Card-footer'>
            <p className='Card-footer_p'> <span className='Card-footer_span'>{amntLeft}</span> <span> left</span></p>
            <Button backgroundColor={backgroundColor} color={color} text={newText} setModal={handleModal} modal={modal}/>
        </aside>
    </article>
  )
}

export default Card