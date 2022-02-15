import React,{useState} from 'react'
import Slider from './Slider'
import '../styles/Stats.css'
function Statistics() {
    const [amnt,setAmnt] = useState(89914)
    const [backers,setStat] = useState(5007)
  return (
    <section className='Stats block'>
        <ul >
        <li>
            <h3> $ {amnt}</h3>
            <p className='text-primary'>of $100,000 backed</p>
        </li>
        <li>
            <h3>  {backers}</h3>
            <p className='text-primary'>total backers</p>
        </li>
        <li>
            <h3>  56</h3>
            <p className='text-primary'>days left</p>
        </li>
    </ul>
    <Slider />
    </section>
  )
}

export default Statistics