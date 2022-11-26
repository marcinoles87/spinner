import React , {useState} from 'react'
import './App.css';


class App extends React.Component {
 
  state = {
    
    activ : false ,
    radius : '' ,

  }
  
 
  startSpinn = () => {

    var spinValue1 = 0 ;
    const spinValue2 = Math.floor(Math.random()*360) ;
    var spinRotate = spinValue1 + spinValue2;

    const  wheel = document.querySelector('.wheel');
    console.log(spinRotate)

    wheel.style.webkitTransform = 'rotate(' + spinRotate + 'deg)'
    

  }

 
 
  handleButton = () => {

    const  wheel = document.querySelector('.wheel');
    const  radius = Math.floor(Math.random()*100) ;

   if(this.state.activ === true) { 
    console.log("dziala")
    // wheel.classList.add('rotate')
    this.startSpinn() ; 

   } else {
    console.log("przestaje dzialac")
    wheel.classList.remove('rotate');
   }
   
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
          
          <span className='wheel' style={{rotate:"330deg"+ {radius}}}></span>

          <button onClick={this.handleButton}> {this.state.activ ? "Spin the wheel radius" : "wartosc radius to :  " +{radiusNumber}}  </button>
      
         </div>
    </div>

)
}
}
export default App;


