import React, { useEffect, useState } from 'react';

const DetailsModal = ({ singlePost, setShowModal }) => {

const [animate, setAnimate] = useState(false)
    const handleClose = (e) => {
        e.stopPropagation();
        setAnimate(false);
        setTimeout(() => {
            setShowModal(false);
        }, 300);
    }
useEffect(() => {
    setAnimate(true)
}, [])

const text = singlePost.post.replace(/\n/g, "<br>");
return (
    <div className={`fixed ${singlePost.color.light} ${singlePost.color.dark} z-30 top-0 left-0 h-[100vh] w-[100vw] text-white bg-black ${animate ? "scale-1" : "scale-0"} transition-all`}>

        <div onClick={(e) => handleClose(e)} className="border border-white rounded p-3 hover:bg-white hover:text-black">
            close
        </div>
        <div className="content">
            <h2>{singlePost.title}</h2>
            <pre>{singlePost.post}</pre>
        </div>
    </div>
);
};

export default DetailsModal;