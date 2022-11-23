import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
const url = 'http://127.0.0.1:8000/api/comments/'

const CreateComment = () => {
    const [videoID, setVideoID] = useState('')
    const [comment, setComment] = useState('')
    const [user, token] = useAuth()


    const handleSubmit = async (e) => {
        e.preventDefault();
        let newComment = {
            video_id: videoID,
            text: comment,
            likes: 0,
            dislikes: 0,
            user_id: user.id
        };
        try {
            const response = await axios.post(url, newComment, {headers: {Authorization: "Bearer" + token}});
            console.log(newComment);
        } catch (error) {
            console.log(error.response);
        }
    }

    return(
       <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' value={comment} onChange={(e) => setComment(e.target.value)}/>

            </div>
            <div>
                <button type='submit'>Submit Comment</button>
            </div>
        </form>
       </div> 
    )
}

export default CreateComment