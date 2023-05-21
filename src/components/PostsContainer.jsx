import React, { useEffect } from 'react';
import SinglePost from './SinglePost';
import { useGetPostsQuery } from '../features/post/postApi';

const PostsContainer = () => {
    // let posts = [
    //     {
    //         title:'some title',
    //         post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores.",
    //         color:{light:'bg-green-500', dark:'dark:bg-green-800'},
    //         tags:['react', 'js', 'redux']
    //     },{
    //         title:'some title',
    //         post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores. lorem20    slg slg sldfjs woif slgwoieg sldgk weoghs slghwo gslgjowig ",
    //         color:{light:'bg-orange-500', dark:'dark:bg-orange-800'},
    //         tags:['react', 'js', 'redux']
    //     },{
    //         title:'some title',
    //         post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores.",
    //         color:{light:'bg-pink-500', dark:'dark:bg-pink-800'},
    //         tags:['react', 'js', 'redux']
    //     },{
    //         title:'some title',
    //         post: "Lorem ipsum dolor sit amet consLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores.",
    //         color:{light:'bg-purple-400', dark:'dark:bg-purple-800'},
    //         tags:['react', 'js', 'redux']
    //     },{
    //         title:'some title',
    //         post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores.",
    //         color:{light:'bg-yellow-400', dark:'dark:bg-yellow-800'},
    //         tags:['react', 'js', 'redux']
    //     },{
    //         title:'some title',
    //         post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores.",
    //         color:{light:'bg-rose-500', dark:'dark:bg-rose-800'},
    //         tags:['react', 'js', 'redux']
    //     },{
    //         title:'some title',
    //         post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores.",
    //         color:{light:'bg-teal-500', dark:'dark:bg-teal-800'},
    //         tags:['react', 'js', 'redux']
    //     },{
    //         title:'some title',
    //         post: "Lorem ipsum dolor sit amet consLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores.",
    //         color:{light:'bg-emerald-500', dark:'dark:bg-emerald-800'},
    //         tags:['react', 'js', 'redux']
    //     }
    // ]

    const {data:posts} = useGetPostsQuery();
    useEffect(()=> {
        console.log("allpost from db", posts)
    },[posts])

    return (
        <div className='columns-2 md:columns-3 lg:columns-4 max-w-[1170px] m-auto my-[100px] px-2'>
            {
                posts?.map(post=> (
                    <SinglePost singlePost={post}/>
                ))
            }
        </div>
    );
};

export default PostsContainer;