import React from 'react';

const DetailsModal = ({singlePost, setShowModal}) => {
    return (
        <div className={`fixed ${singlePost.color.light} ${singlePost.color.dark} z-30 top-0 left-0 h-[100vh] w-[100vw] text-white`}>

            <div onClick={(e)=>{e.stopPropagation(); console.log('clicking close');setShowModal(false)}} className="border border-white rounded p-3 hover:bg-white hover:text-black">
                close
            </div>
            <div className="content">
                <h2>{singlePost.title}</h2>
                <p>{singlePost.post}</p>
            </div>
        </div>
    );
};

export default DetailsModal;