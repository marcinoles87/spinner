
import './App.css';

function App() {

  const radius = Math.floor(Math.random()*100) ;
  const wheel = document.getElementById('wheel');
  console.log(radius);
  console.log(wheel)

  const handleButton = (radius) => {

    wheel.style.rotate(radius)
  }
  

  return (
    <div className="App">

        <div className='spin'>

          <h1>Spin the wheel </h1>

          <span id="wheel"> </span>

          <button className="spinButton"  onClick={handleButton}> Spin the wheel</button>
      
         </div>
    </div>
  );
}

export default App;
