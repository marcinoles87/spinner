import React , {useState} from 'react'
import './App.css';

class App extends React.Component {
 
  state = {
    
    style : '' ,
   

  }
  
 

 
 
  handleButton = () => {
   const  wheel = document.querySelector('.wheel');
   const  radius = Math.floor(Math.random()*100) ;
  
  console.log(wheel)
   wheel.classList.add('rotate')
   
    this.setState(()=>({
     
      style : '',
      
    }))


   
    console.log(radius)

    }
  




  render(){

    

  return (


    <div className="App">

        <div className='spin'>

          <h1>Spin the wheel on radius : {this.state.radius}</h1>
          
          <span className='wheel'></span>

          <button onClick={this.handleButton}> Spin the wheel radius {this.state.radius}</button>
      
         </div>
    </div>

)
}
}
export default App;


