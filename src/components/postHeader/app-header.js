import React from 'react';

import './postHeader.css'

const PostHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    )
}

export default PostHeader;