import React, {useState} from 'react'

const Comments =()=>{
    const [comments, setComments] = useState([]);

    const handleComments = async()=>{
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    }

    return(
        <div>
         <button onClick={handleComments}>Load Comments</button>
        {
            comments.map((comment)=>{
                return(
                    <div key ={comment.id}>
                      <h2>
                      {comment.id} | {comment.text}
                      </h2>  
                    </div>
                )
            })
        }
        </div>
    )
}

export default Comments;