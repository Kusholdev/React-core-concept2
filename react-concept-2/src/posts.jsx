import { use } from "react"
import PostDescription from "./post"

export default function Posts({postsPromise}){
    // use keyword - for load the data
    const posts1 = use(postsPromise)
    // console.log(posts1)
     return(
        <div className="card">
            <h4>All posts should be here</h4>
            <h3>Posts:{posts1.length}</h3>
            {
                posts1.map(post => <PostDescription post={post}></PostDescription>)
            }
        </div>
     )
}