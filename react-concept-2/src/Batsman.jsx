import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0)
    const [sixes,setSixes] = useState(0)
    const [fours,setFours] = useState(0)
 const handleSingles=()=>{
    const updateRuns = runs + 1;
    setRuns(updateRuns);
 }
 const handleFour=()=>{
    const updateFourRun = runs + 4;
    const updateFourCount = fours + 1;
    setFours(updateFourCount)
    setRuns(updateFourRun);
 }
 const handleSix=()=>{
    const updateSixRun = runs + 6;
    const updateSixCount = sixes + 1;
    setRuns(updateSixRun);
    setSixes(updateSixCount);
 }
    return(
        <div>
            <h2>Player: Bangladeshi</h2>
            <h2>Scores : {runs} </h2>
            <h2>Sixes:{sixes}</h2>
            <h2>Fours: {fours}</h2>
            {
                runs >= 50 && <p>You scores 50</p>
            
            }
            <button onClick={handleSingles}>singles</button>
            <button  onClick={handleFour}>Four</button>
            <button onClick={handleSix}> Six</button>
        </div>
    )
}