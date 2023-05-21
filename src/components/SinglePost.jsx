import React, { useEffect, useState } from 'react';
import DetailsModal from './DetailsModal';

const SinglePost = ({ singlePost }) => {
    const { title, post, color, tags } = singlePost;
    const [showModal, setShowModal] = useState(false);
    useEffect(()=> {
        console.log(showModal)
    },[showModal])
    return (
        <div onClick={() => {console.log('clicked post');setShowModal(true)}} className={`dark:bg-slate-800 bg-slate-200 dark:text-white rounded mb-2 break-inside-avoid p-3 cursor-pointer dark:shadow dark:shadow-slate-700 dark:hover:shadow-slate-500 shadow-sm`}>{
                showModal && <DetailsModal singlePost={singlePost} setShowModal={setShowModal}/>
            }
            <h2 className={`font-regular md:font-semibold text-[16px] md:text-[18px] lg-text[20px] ${color}`}>{title}</h2>
            <p className='opacity-50 text-[12px] md:text-[14px]'>{post}</p>
            <div className="tags mt-3">
                {
                    tags?.map(tag=> (
                        <span className={`${color} mr-2 border dark:border-slate-200 py-1  border-black rounded-lg px-2 text-[10px]`}>{tag}</span>
                    ))
                }
            </div>
        </div>
    );
};

export default SinglePost;