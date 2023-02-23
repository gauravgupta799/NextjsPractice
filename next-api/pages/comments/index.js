import React, {useState} from 'react'

const Comments =()=>{
    const [comments, setComments] = useState([]);
    const [commentVal ,setCommentVal] = useState("");

    const handleComments = async()=>{
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    }

    const handleSubmitComment = async()=>{
        const response = await fetch('/api/comments', {
            method: 'POST',
            body:JSON.stringify({commentVal}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        setCommentVal("");
        handleComments()
        // console.log(data);
    }

    const handleDeleteComment = async(commentId)=>{
        const response = await fetch(`/api/comments/${commentId}`, { method: 'DELETE'})
        const data = await response.json();
        handleComments()
    }

    return(
        <div style={{margin:"10px"}}>
        <input type="text" 
        placeholder="Write your comment" 
        value= {commentVal}
        onChange={e=>setCommentVal(e.target.value)}    
        /> &nbsp;
         <button onClick={handleSubmitComment}>Submit Comment</button> &nbsp;
         <button onClick={handleComments}>Load Comments</button>
        {
            comments.map((comment)=>{
                return(
                    <div key ={comment.id} style={{
                        display:"flex",
                        alignItems: "center",
                        justifyContent:'space-between',
                        margin:"10px 5px",
                        width:"30%",
                        }}>
                      <h2>
                      {comment.id} | {comment.text}
                      </h2> &nbsp;&nbsp;  
                      <button onClick={()=>handleDeleteComment(comment.id)}>Delete comment</button>
                    </div> 
                )
            })
        }
        </div>
    )
}

export default Comments;