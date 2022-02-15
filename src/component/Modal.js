import React,{useState} from 'react'
import ModalCard from './ModalCard'
import '../styles/Modal.css'
function Modal({cardDetails,modal,handleModal}) {
    const[labelOn,setLabelOn] = useState(false)
  const modalDetails = [
    {
        backgroundColor : 'hsl(176, 50%, 47%)',
        color: '#fff',
        id:5,
        inStock:true,
        leadText : 'Pledge with no rewards',
        text:" Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        amntLeft:'',
        pledge:'',
        name:'reward',
        btnPledge : [
          {value : 10,
            backgroundColor: '#f3f3f3',
            color:"#000",
            currency : '$'
          },
          {value: 'continue',
          backgroundColor: 'hsl(176, 50%, 47%)',
          color:"#fff"
         }
        ]
    },
      ...cardDetails
  ]

  
  return (
    <section className={modal ? 'Modal block close-modal' : 'Modal block'}>
      <article className='Modal-top' >
          <h3>Back this project</h3>
          <p className='text-small'> Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
          <div className='text-primary' onClick={handleModal}>
                X
          </div>
      </article>
      <section className='Modal-card_group'>
          {modalDetails.map(modal =>(
              <ModalCard {...modal} key={modal.id} setLabelOn={setLabelOn} labelOn={labelOn}/>
          ))}
      </section>
    </section>
  )
}

export default Modal