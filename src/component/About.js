import React from 'react'
import Card from './Card'
import '../styles/About.css'
function About({cardDetails,handleModal,modal}) {
 
  return (
    <section className='About block'>
      <article>
          <h3 className=''>About Section</h3>
          <p className='About-text text-primary'>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>
          <p className='About-text text-primary'>
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>
      </article>
      <aside className='About-card_group'>
        {cardDetails.map(card =>( 
          <Card {...card} key={card.id} handleModal={handleModal} modal={modal}/>
        ) )}
      </aside>
    </section>
  )
}

export default About