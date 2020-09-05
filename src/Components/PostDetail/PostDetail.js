import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {postId} = useParams();

    const [detail, setDetail] = useState({});
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
    }, [])

    const {id, title, body} = detail;

    return (
        <div align="center" style={{color: '#1769aa'}}>
            <h2>{id}. {title}</h2>
            <br/>
            <p>{body}</p>
            <Comment detail={postId}></Comment>
        </div>
    );
};

export default PostDetail;