import { useState } from "react"

 export default function Counter (){

    const[count,setCount] = useState(0);

     const handleAdd =()=>{
        // setCount(1);
        const newCount = count + 1;
        setCount(newCount);
     }


    const borderStyle = {
        border: '2px solid yellow'
    }
    const textColor ={
        color: 'red'
    }
    const btnColor ={
        backgroundColor:'Black',
        color:'white'
    }
    return(
        <div style={borderStyle}>
            <h3 style={textColor}>Count: {count}</h3>
            <button style={btnColor} onClick={handleAdd} >Add: </button>
        </div>
    )
}

