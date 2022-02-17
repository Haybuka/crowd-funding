import React,{useState} from 'react';
import Crowdfund from './component/Crowdfund';
import Header from './component/Header';
import './App.css'
function App() {
  let [toggle,setToggle] = useState(true)

  return (
    <div className='container'>
      <Header toggle={toggle} setToggle={setToggle}/>

     <> 
        <Crowdfund toggle={toggle}/>
     </>
    </div>
  );
}

export default App;
