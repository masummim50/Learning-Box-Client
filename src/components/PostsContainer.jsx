import React from 'react';
import SinglePost from './SinglePost';

const PostsContainer = () => {
    let posts = [
        {
            title:'some title',
            post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores.",
            color:{light:'bg-orange-200', dark:'dark:bg-orange-800'},
            tags:['react', 'js', 'redux']
        },{
            title:'some title',
            post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores.",
            color:{light:'bg-orange-200', dark:'dark:bg-orange-800'},
            tags:['react', 'js', 'redux']
        },{
            title:'some title',
            post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores.",
            color:{light:'bg-orange-200', dark:'dark:bg-orange-800'},
            tags:['react', 'js', 'redux']
        },{
            title:'some title',
            post: "Lorem ipsum dolor sit amet consLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores.",
            color:{light:'bg-orange-200', dark:'dark:bg-orange-800'},
            tags:['react', 'js', 'redux']
        },{
            title:'some title',
            post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores.",
            color:{light:'bg-orange-200', dark:'dark:bg-orange-800'},
            tags:['react', 'js', 'redux']
        },{
            title:'some title',
            post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores.",
            color:{light:'bg-orange-200', dark:'dark:bg-orange-800'},
            tags:['react', 'js', 'redux']
        },{
            title:'some title',
            post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores.",
            color:{light:'bg-orange-200', dark:'dark:bg-orange-800'},
            tags:['react', 'js', 'redux']
        },{
            title:'some title',
            post: "Lorem ipsum dolor sit amet consLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresLorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maioresectetur adipisicing elit. Fugiat cupiditate sit maxime error iusto cum pariatur esse vel modi maiores.",
            color:{light:'bg-orange-200', dark:'dark:bg-orange-800'},
            tags:['react', 'js', 'redux']
        }
    ]
    return (
        <div className='columns-3 max-w-[1170px] m-auto'>
            {
                posts.map(post=> (
                    <SinglePost singlePost={post}/>
                ))
            }
        </div>
    );
};

export default PostsContainer;