import React,{useState} from 'react'
import '../styles/Backers.css'
function Backers() {
    const [amnt,setAmnt] = useState(89914)
    const [backers,setBackers] = useState(5007)
  return (
    <ul className='Backers'>
        <li>
            <h3> $ {amnt}</h3>
            <p>of $100,000 backed</p>
        </li>
        <li>
            <h3>  {backers}</h3>
            <p>total backers</p>
        </li>
        <li>
            <h3>  56</h3>
            <p>days left</p>
        </li>
    </ul>
  )
}

export default Backers