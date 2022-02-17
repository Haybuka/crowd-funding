import React from 'react'
import ModalButton from './ModalButton'
import check from '../images/icon-check.svg'
import '../styles/Appreciation.css'
function Appreciation({appreciate,setAppreciate,handleModal,modal}) {
    function handleClick(){
        setAppreciate(!appreciate)
         handleModal(true)
    } 
  return (
    <section className={appreciate ? 'Appreciation':'Appreciation hide-appreciate'}>
      <div>
      <img src={check} alt="check mark" />
       <h3>Thanks for your support</h3>
       <p className='text-primary'>
       Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
       </p>
       <aside onClick={handleClick}>
       <ModalButton value="Got it" 
           backgroundColor='hsl(176, 50%, 47%)' 
           color="#fff" />
       </aside>
      </div>
    </section>
  )
}

export default Appreciation