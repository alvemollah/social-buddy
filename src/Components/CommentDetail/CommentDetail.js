import { Avatar } from '@material-ui/core';
import React from 'react';

const CommentDetail = ({comment}) => {
    const {id, name, email, body} = comment;

    return (
        <div style={{border: '1px solid #ff6f00', margin: '40px', borderRadius: '20px', backgroundImage:"linear-gradient(30deg, #fbe9e7, #bdbdbd, #a1887f)"}}>
            <Avatar
                src={`https://loremflickr.com/600/400?random=${
                  Math.random() * 10
                }`}
                style={{ width: "80px", height: "80px" }}
              />
            <h5>{id}. Name: {name}</h5>
            <p>Email: {email}</p>
            <p>Tweet : {body}</p>
        </div>
    );
};

export default CommentDetail;