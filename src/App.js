import React , {useState} from 'react'
import './App.css';

class App extends React.Component {
 
  state = {
    
    activ : false ,
    radius : '' ,

  }
  
 

 
 
  handleButton = () => {
   const  wheel = document.querySelector('.wheel');
   const  radius = Math.floor(Math.random()*100) ;
  
  console.log(wheel)

  
   wheel.classList.add('rotate')
   
    this.setState(()=>({
     
      activ : !this.state.activ ,
      radius : radius
      
    }))

  


   
    console.log(radius)

    }
  




  render(){

    const  radius = Math.floor(Math.random()*100) ;
    const radiusNumber = radius;
    console.log(radius);

  return (


    <div className="App">

        <div className='spin'>

          <h1>Spin the wheel on radius : {this.state.radius}</h1>
          <h2> radius : {radiusNumber}</h2>
          
          <span className='wheel' style={{color:"red"}}></span>

          <button onClick={this.handleButton}> {this.state.activ ? "Spin the wheel radius" : "wartosc radius to :  " +{radiusNumber}}  </button>
      
         </div>
    </div>

)
}
}
export default App;


