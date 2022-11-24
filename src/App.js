import React , {useState} from 'react'
import './App.css';

class App extends React.Component {
 
  state = {
    
    style : '' ,
   

  }
  
 

 
 
  handleButton = () => {
   const  wheel = document.getElementById('wheel');
   const  radius = Math.floor(Math.random()*100) ;
  
   wheel.style.rotate = radius 
   wheel.classList.add('.rotate')
   
    this.setState(()=>({
     
      style : '',
      
    }))


    wheel.style.backgroundColor = this.state.color
    wheel.style.rotate = this.state.rotate
    console.log(radius)

    }
  




  render(){

    

  return (


    <div className="App">

        <div className='spin'>

          <h1>Spin the wheel on radius : {this.state.radius}</h1>
          
          <span id="wheel" style={{rotate : this.state.radius}}></span>

          <button onClick={this.handleButton}> Spin the wheel radius {this.state.radius}</button>
      
         </div>
    </div>

)
}
}
export default App;


