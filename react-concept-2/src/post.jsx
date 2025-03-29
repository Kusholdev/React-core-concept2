
export default function PostDescription({post}){
    // console.log(post)
    const{title,id}=post
    return(
        <div className="card">
    <h4> ID :{id}   Title:{title}</h4>

        </div>
    )
}