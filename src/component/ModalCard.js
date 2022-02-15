import React,{useState} from 'react'
import {v4 as uuid} from 'uuid'
import ModalButton from './ModalButton'
import '../styles/ModalCard.css'
function ModalCard({name,text,leadText,btnPledge,setLabelOn,id,labelOn,amntLeft,inStock}) {
    const [toggleForm,setToggleForm] = useState(false)
    const [input,setInput] = useState('')
  
    function handleChange(e){
        setInput(e.target.value)
    }
    function handleClick(e){
     console.log('clicked', e.target.checked)
     setToggleForm(!toggleForm);
      setLabelOn(!labelOn)
    }
    let data;
    if(inStock && toggleForm){
      data = <form>
      <input type="text" value={input} placeholder="Enter your pledge" onChange={(e) => handleChange(e)}/>
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
               {/* checked={labelOn} */}
               <aside>
                 <div >
                    <h4>{leadText}</h4>
                  </div>
                  <div>
                       <p> {text}.</p>
                  </div>
               
               </aside>
              </label>
              {data}
          </div>
    </>
  )
}

export default ModalCard