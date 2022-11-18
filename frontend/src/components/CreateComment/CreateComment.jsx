import React, { useState } from 'react';
import axios from 'axios';

const createComment = () => {
    const [videoID, setVideoID] = useState('')
    const [comment, setComment] = useState('')
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newComment = {
            videoID: videoID,
            // text: comment,
            likes: likes,
            dislikes: dislikes,
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
       </div> 
    )
}