import React,{useState} from 'react'
import Button from './Button'
import '../styles/Layout.css'
import logo from '../images/icon-bookmark.svg'
import icon from '../images/logo-mastercraft.svg'
function Layout({handleModal}) {
    const [bookmark,setBookmark] = useState(false);
    const buttonProps =[
        {
            backgroundColor : 'hsl(176, 50%, 47%)',
            color: '#fff',
            text: 'Back this project',
            img : false,
            id:1,
            bookmarked:false,
        },
        {
            backgroundColor : '#f3f3f3',
            color: '#2f2f2f',
            text: 'Bookmark',
            img : true,
            src:logo,
            bookmarked : bookmark,
            id:2,
            mark:true,
            toggleBookmark
        }
    ]

  function toggleBookmark(id){
      if(id===2){
         setBookmark(!bookmark)
      }
  }

  return (
    <section className='Layout block'>
       <article className='intro-text'>
           <h2>Mastercraft Bamboo Monitor Riser</h2>
           <p className='text-primary'>A beautiful '&' handcrafted monitor stand to reduce neck and eye strain</p>
       </article>
       <aside className='btn-group'>
           {buttonProps.map(button =>(
               <Button 
               {...button} 
               key={button.id} 
               handleModal={handleModal}
              />
           ))}
       </aside>
       <img src={icon} className="img-icon" alt="icon"/>
    </section>
  )
}

export default Layout
