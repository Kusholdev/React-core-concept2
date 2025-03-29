
import './App.css'
import Counter from './counter'
import Batsman from './Batsman'
import Users from './users'
import { Suspense } from 'react'
import Friends from './friends'
import Posts from './posts'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=> res.json())

const fetchFriends = async()=>{
 const res = await fetch('https://jsonplaceholder.typicode.com/users')
 return res.json(); 
}
const fetchPosts =async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}

function App() {

  const friendsPromise = fetchFriends()
  const postsPromise =fetchPosts();

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

    <Suspense fallback={<p>Load..Wait...</p>}>
      <Posts postsPromise={postsPromise} ></Posts>
    </Suspense>



    <Suspense fallback={<h3>Loading....</h3>}>
      <Users fetchUsers={fetchUsers}>

      </Users>
    </Suspense>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me2</button>
      <button onClick={() => alert('Click me 3')}>Click me3</button>
      <button onClick={()=> handleAdd5(9)}>Click 4</button>
      <button onClick={handleAnyThing}>click 5</button>
      <button onClick={() => handleBtn(10)}>click 6</button>
      <Counter></Counter>

      <Batsman></Batsman>

      <Suspense fallback={<p>Loading....</p>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      
    </>
  )
}


export default App
