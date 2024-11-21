import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
/*import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";*/
import Exponent from "./components/Exponent";


function App () {

  //Counter
  const [count, setCount] = useState(0);

  const increment = () => setCount ((prevCount) => prevCount + 1); 
  const decrement = () => setCount ((prevCount) => prevCount - 1); 

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count = {count} onIncrement = {increment} onDecrement = {decrement}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        {/*<ExponentTwo count = {count}/>
        <ExponentThree count = {count}/>
        <ExponentFour count = {count}/>
        <ExponentFive count = {count}/>
        <ExponentSix count = {count}/>*/}
        <Exponent num = {count} exponent = {2} />
        <Exponent num = {count} exponent = {3} />
        <Exponent num = {count} exponent = {4} />
        <Exponent num = {count} exponent = {5} />
        <Exponent num = {count} exponent = {6} />
      </div>
    </div>
  );
}

export default App;
