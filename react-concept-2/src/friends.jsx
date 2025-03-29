import { use } from "react"
import Friend from "./friend";

export default function Friends({friendsPromise}){
    const friends = use(friendsPromise);
    // console.log()
    return(
        <div className="card">

            <h3>friends:{friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}