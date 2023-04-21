import React from 'react';

const SinglePost = ({singlePost}) => {
    const {title, post, color, tags} = singlePost;
    return (
        <div className={`${color.light} ${color.dark} text-white border border-red-400 rounded m-2 break-inside-avoid`}>
            <h2>{title}</h2>
            <p>{post}</p>
        </div>
    );
};

export default SinglePost;