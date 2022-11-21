
import './App.css';

function App() {

  
  const wheel = document.getElementById('wheel');
  
 
  const handleButton = () => {

    const radius = Math.floor(Math.random()*100) ;
    console.log({radius});
    
    
  }
  

  return (
    <div className="App">

        <div className='spin'>

          <h1>Spin the wheel </h1>

          <span id="wheel"></span>

          <button className="spinButton"  onClick={handleButton}> Spin the wheel</button>
      
         </div>
    </div>
  );
}

export default App;
