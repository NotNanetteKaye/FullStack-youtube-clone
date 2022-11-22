import React, { useState } from 'react';
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
            const response = await axios.post(url, newComment);
            console.log(response.data);
        } catch (error) {
            console.log(error.response);
        }
    }

    return(
       <div>
        <form onSubmit={handleSubmit}>
            <label>Video ID</label>
            <input type='string' value={videoID} onChange={(e) => setVideoID(e.target.value)}/>
            <label>Comment</label>
            <input type='string' value={comment} onChange={(e) => setComment(e.target.value)}/>
            <label>User</label>
            <input type='number' step='1' onChange={(e) => token(e.target.value)}/>
            <button>Create Comment</button>
        </form>
       </div> 
    )
}

export default CreateComment