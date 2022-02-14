import React,{useState} from 'react'
import Button from './Button'
import '../styles/Layout.css'
import logo from '../images/icon-bookmark.svg'
function Layout() {
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
    <section className='Layout'>
       <article className='intro-text'>
           <h2>Mastercraft Bamboo Monitor Riser</h2>
           <p>A beautiful '&' handcrafted monitor stand to reduce neck and eye strain</p>
       </article>
       <aside className='btn-group'>
           {buttonProps.map(button =>(
               <Button 
               {...button} 
               key={button.id} 
              />
           ))}
       </aside>
    </section>
  )
}

export default Layout
