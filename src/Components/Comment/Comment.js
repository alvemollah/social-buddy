import React, { useEffect, useState } from 'react';
import CommentDetail from '../CommentDetail/CommentDetail';

const Comment = ({detail}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${detail}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

    return (
        <div>
            {
                comments.map(comment => <CommentDetail key={comment.id} comment={comment}></CommentDetail>)
            }
            
        </div>
    );
};

export default Comment;