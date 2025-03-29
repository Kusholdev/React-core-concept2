
import './App.css'
import Counter from './counter'
import Batsman from './Batsman'

function App() {
  function handleClick(){
    alert("i'm working")
  }
 const handleClick2=()=>{
  alert("i'm working 2 ")
 }
 const handleAdd5 =(num)=>{
  const newNumber = num + 5;
  
  alert(newNumber)
 }
 const handleAnyThing =()=>{

   alert("hi,boss");
 }
 const handleBtn =(num)=>{
  const newNumber = num + 5;
  alert(newNumber);
 }
  return (
    <>
      
      <h3>Vite + React</h3>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me2</button>
      <button onClick={() => alert('Click me 3')}>Click me3</button>
      <button onClick={()=> handleAdd5(9)}>Click 4</button>
      <button onClick={handleAnyThing}>click 5</button>
      <button onClick={() => handleBtn(10)}>click 6</button>
      <Counter></Counter>

      <Batsman></Batsman>
      
    </>
  )
}


export default App
