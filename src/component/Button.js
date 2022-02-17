import React from 'react'
import '../styles/Button.css'
function Button(props) {
    const {backgroundColor,color,text,id,img,src,bookmarked,mark,toggleBookmark,modal,handleModal} = props
    const btn = {
        backgroundColor,
        color,
    }
   
    function handleClick(id){
      mark ? toggleBookmark(id) : handleModal()
    }
  return (
    // <button style={btn} className={bookmarked ? 'btn bookmark' : 'btn'} onClick={ () => mark ? toggleBookmark(id) : ''}>
    <button style={btn} className={bookmarked ? 'btn bookmark' : 'btn'} onClick={ () => handleClick(id)}>

         {img ? (<div className='btn-img'> <img src={src} alt="" /> </div>) : null}  
         <p className={ mark?'btn-text mark' : 'btn-text'}>{text}</p>
    </button>
  )
}

export default Button