import React, { useEffect } from 'react';
import SinglePost from './SinglePost';
import { useGetPostsQuery } from '../features/post/postApi';

const PostsContainer = () => {
    

    const {data:posts, isLoading, isSuccess} = useGetPostsQuery();

    useEffect(()=> {
        console.log("allpost from db", posts,isLoading, isSuccess)
    },[posts,isLoading, isSuccess])

    return (
        // columns-2 md:columns-3 lg:columns-4
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-[1170px] m-auto my-[100px] px-2'>
            {
                posts?.data?.posts?.map(post=> (
                    <SinglePost key={post._id} singlePost={post}/>
                ))
            }
            {
                posts?.data?.posts?.length === 0 && <div className='text-white'>no posts added yet</div>
            }
        </div>
    );
};

export default PostsContainer;