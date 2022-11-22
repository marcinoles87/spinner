import React , {useState} from 'react'
import './App.css';

class App extends React.Component {
 
  state = {
    color : 'red' ,
    style : '' ,
    radius : 99,

  }
  
 

 
 
  handleButton = () => {
   const  wheel = document.getElementById('wheel');
   const  radius = Math.floor(Math.random()*100) ;

   document.body.style.backgroundColor =  'blue'
   wheel.style.backgroundColor = 'red'
   wheel.style.rotate = {radius}+'deg'
   
    this.setState(()=>({
      color : 'green' ,
      style : '',
      radius : radius
    }))

    console.log(radius)

    }
  




  render(){

    

  return (


    <div className="App">

        <div className='spin'>

          <h1>Spin the wheel on radius : {this.state.radius}</h1>
          
          <span id="wheel"></span>

          <button onClick={this.handleButton}> Spin the wheel radius {this.state.radius}</button>
      
         </div>
    </div>

)
}
}
export default App;


