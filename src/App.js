import React , {useState} from 'react'
import './App.css';


class App extends React.Component {
 
  state = {
    
    activ : false ,
    radius : '' ,
    spinR : Math.floor(Math.random()*360) ,

  }

  newspaperSpinning = [
    { transform: 'rotate(0) ' } ,
    { transform: 'rotate(0)'+this.state.spinR } ,
     
  ];

  newspaperTiming = {
    duration: 2000,
    iterations: 1,
  }
  
 
  startSpinn = () => {

    const  body = document.querySelector('body');

    
    const spinValue2 = Math.floor(Math.random()*360) ;
    var spinRotate = spinValue2 + this.state.spinR;

    const  wheel = document.querySelector('.wheel');
    console.log(spinRotate)

    // wheel.classList.add('rotate')
    wheel.style.webkitTransform = 'rotate(' + spinRotate + 'deg)' 
    wheel.animate(this.newspaperSpinning , this.newspaperTiming)

    if(spinRotate >300 ) {
      body.style.backgroundColor = 'red';
    }

    else if(spinRotate < 299 && spinRotate >200 ) {
      body.style.backgroundColor = 'blue';
    }

    else if(spinRotate < 200  ) {
      body.style.backgroundColor = 'green';
    }
    
  }

 
 
  handleButton = () => {

    const  wheel = document.querySelector('.wheel');
    const  radius = Math.floor(Math.random()*100) ;
   

   if(this.state.activ === true) { 
    console.log("dziala")
   
    this.startSpinn() ; 

   } else {
    console.log("przestaje dzialac")
    wheel.classList.remove('rotate');
   }
   
    this.setState(()=>({
     
      activ : !this.state.activ ,
      radius : radius ,
      spinR : 0 , 
      
    }))

   
    // console.log(radius)

    

    }
  




  render(){

    
   
    // console.log(radius);

  return (


    <div className="App">

        <div className='spin'>

          <h1>Spin the wheel </h1>
          
          
          <span className='wheel' ></span>

          <button onClick={this.handleButton}> {this.state.activ ? "Click to spin" : "stop   "}  </button>
      
         </div>
    </div>

)
}
}
export default App;


