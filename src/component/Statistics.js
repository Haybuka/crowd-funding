import React,{useState} from 'react'
import Slider from './Slider'
import '../styles/Stats.css'
function Statistics({amnt,stat}) {
  return (
    <section className='Stats block'>
        <ul >
        <li className={amnt.toString().length > 12 ? 'mr-3' : ''}>
            <h3 > $ {amnt.toLocaleString()}</h3>
            <p className='text-primary'>of $100,000 backed</p>
        </li>
        <li className={amnt.toString().length > 12 ? 'mr-3' : ''}>
            <h3>  {stat.toLocaleString()}</h3>
            <p className='text-primary'>total backers</p>
        </li>
        <li className={amnt.toString().length > 12 ? 'mr-3' : ''}>
            <h3>  56</h3>
            <p className='text-primary'>days left</p>
        </li>
    </ul>
    <Slider />
    </section>
  )
}

export default Statistics