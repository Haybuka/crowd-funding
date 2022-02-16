import React,{useState} from 'react'
import {v4 as uuid} from 'uuid'
import ModalButton from './ModalButton'
import '../styles/ModalCard.css'
function ModalCard({name,text,leadText,btnPledge,setLabelOn,id,labelOn,amntLeft,inStock,pledge,updateModalStat}) {

    const [toggleForm,setToggleForm] = useState(false)
    const [input,setInput] = useState('')
  
    function handleChange(e){
      setInput(e.target.value)
    }
    function handleClick(e){
     setToggleForm(!toggleForm);
      setLabelOn(!labelOn)
    }
 
    function handleSubmit(e){
      e.preventDefault()
      updateModalStat(input)
      setInput('')
     setToggleForm(!toggleForm);
    }

    if(inStock && toggleForm){
      var data = <form onSubmit={e => handleSubmit(e)}>
      <input type="text" 
          value={input} placeholder="Enter your pledge" 
          onChange={(e) => handleChange(e)} />
      <div className='Modal-btn_group'>
          {btnPledge.map( pledge => (
              <ModalButton {...pledge} key={uuid()}/>
          ))}
       
      </div>
      </form>
    }

    return (
    <>
      <div className={inStock ? 'Modal-card' : 'Modal-card out-of-stock'}>
              <label className='Modal-default'>
               <input type='radio' name={name} value={leadText} onClick={handleClick}/>
               <aside>
                 <div >
                    <ul>
                       <li>
                          <h4>{leadText}</h4>                 
                          {pledge > 0 ? ( <p> {`pledge $${pledge} or more`}</p> ) : ''}
                       </li>
                       <li>
                          <p className='Modal-footer_p'> 
                            {amntLeft > 0 ? (<> <span className='Modal-footer_span'>{amntLeft}</span>
                               <span> left</span></>) : ''}
                            
                          </p>
                       </li>
                    </ul>
                  </div>
                  <div>
                       <p className='text-primary'> {text}.</p>
                  </div>
               
               </aside>
              </label>
              {data}
          </div>
    </>
  )
}

export default ModalCard