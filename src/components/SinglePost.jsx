import React, { useEffect, useState } from 'react';
import DetailsModal from './DetailsModal';

const SinglePost = ({ singlePost }) => {
    const { title, post, color, tags } = singlePost;
    const [showModal, setShowModal] = useState(false);
    useEffect(()=> {
        console.log(showModal)
    },[showModal])
    return (
        <div onClick={() => {console.log('clicked post');setShowModal(true)}} className={`${color.light} ${color.dark} dark:text-white text-black  rounded mb-2 break-inside-avoid p-3 cursor-pointer`}>{
                showModal && <DetailsModal singlePost={singlePost} setShowModal={setShowModal}/>
            }
            <h2 className='font-bold text-[25px]'>{title}</h2>
            <p className='opacity-50'>{post}</p>
            
        </div>
    );
};

export default SinglePost;