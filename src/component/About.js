import React from 'react'
import Card from './Card'
import '../styles/About.css'
function About() {
  const cardDetails = [
    {
        backgroundColor : 'hsl(176, 50%, 47%)',
        color: '#fff',
        id:4,
        inStock:true,
        leadText : 'Bamboo Stand',           
        text: " You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and youll be added to a special Backer member list.",
        amntLeft:101,
        pledge : 25
    },
    {
      backgroundColor : 'hsl(176, 50%, 47%)',
      color: '#fff',
      id:5,
      inStock:true,
      leadText : 'Black Edition Stand',
      text:" You get a Black Special Edition computer stand and a personal thank you. Youll be added to our Backer member list. Shipping is included.",
      amntLeft:64,
      pledge:75
  },  
  {
      // backgroundColor : '#f3f3f3',
      backgroundColor : '#f3f3f3',
      color: '#2f2f2f',
      id:6,
      inStock:false,
      leadText : 'Mahogany Special Edition',
      text:" You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      amntLeft:0,
      pledge:200
    }
]
  return (
    <section className='About'>
      <article>
          <h3 className=''>About Section</h3>
          <p className='About-text'>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </p>
          <p className='About-text'>
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>
      </article>
      <aside className='About-card_group'>
        {cardDetails.map(card =>( 
          <Card {...card} key={card.id}/>
        ) )}
      </aside>
    </section>
  )
}

export default About