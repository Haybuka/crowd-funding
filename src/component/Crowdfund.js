import React,{useState} from 'react'
import {v4 as uuid} from 'uuid'
import Header from "../component/Header";
import Layout from "../component/Layout";
import Statistics from './Statistics';
import About from './About';
import Modal from './Modal';
import Appreciation from './Appreciation';
function Crowdfund({toggle}) {
  const [modal,setModal] = useState(true)
  let [amnt,setAmnt] = useState(89914)
  let [stat,setStat] = useState(5007)
  const [appreciate,setAppreciate] = useState(false)

  const cardDetails = [
    {
        backgroundColor : 'hsl(176, 50%, 47%)',
        color: '#fff',
        id:uuid(),
        inStock:true,
        leadText : 'Bamboo Stand',           
        text: " You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and youll be added to a special Backer member list.",
        amntLeft:101,
        pledge : 25,
        name:'reward',
        btnPledge : [
          {value : 25,
            backgroundColor: '#f3f3f3',
            color:"#000",
            currency : '$',
            disabled : true

           },
           {value: 'continue',
           backgroundColor: 'hsl(176, 50%, 47%)',
            color:"#fff"
          }
        ]
    },
    {
      backgroundColor : 'hsl(176, 50%, 47%)',
      color: '#fff',
      id:uuid(),
      inStock:true,
      leadText : 'Black Edition Stand',
      text:" You get a Black Special Edition computer stand and a personal thank you. Youll be added to our Backer member list. Shipping is included.",
      amntLeft:64,
      pledge:75,
      name:'reward',
      btnPledge : [
        {value : 75,
          backgroundColor: '#f3f3f3',
          color:"#000",
            currency : '$',
            disabled : true

         },
         {value: 'continue',
         backgroundColor: 'hsl(176, 50%, 47%)',
         color:"#fff"
        }
      ]
  },  
  {
      backgroundColor : '#f3f3f3',
      color: '#2f2f2f',
      id:uuid(),
      inStock:false,
      leadText : 'Mahogany Special Edition',
      text:" You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      amntLeft:0,
      pledge:200,
      name:'reward',
      btnPledge : [
        {value : 200,
          backgroundColor: '#f3f3f3',
          color:"#000",
            currency : '$',
            disabled : true

         },
         {value: 'continue',
         backgroundColor: 'hsl(176, 50%, 47%)',
         color:"#fff"
        }
      ]
    }
]

  function updateModalStat(inputValue){
    setAppreciate(!appreciate)
    setStat(stat+=1)
    setAmnt(amnt + 20)

  }
  function handleModal(){
    setModal(!modal)
  }
  return (
    <>
      <main className={!modal ? 'modal-bg':''}>
        <Layout handleModal={handleModal}/>
        <Statistics amnt={amnt} stat={stat}   toggle={toggle}/>
        <About cardDetails={cardDetails} handleModal={handleModal} modal={modal}  toggle={toggle}/>
      </main>
      <Modal cardDetails={cardDetails} handleModal={handleModal} modal={modal} updateModalStat={updateModalStat} toggle={toggle}/>
      <Appreciation appreciate={appreciate} setAppreciate={setAppreciate} handleModal={setModal} modal={modal}/>

    </>
  )
}

export default Crowdfund