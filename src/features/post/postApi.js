import { apiSlice } from "../api/apiSlice";

export const postsApi = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getPosts: builder.query({
            query: ()=> "/posts"
        }),
        getPostById: builder.query({
            query: (id)=> `/posts/${id}`
        }),
        createPost: builder.mutation({
            query: (data)=> ({
                url: '/post',
                method:'POST',
                body:data
            }),
            async onQueryStarted(args, {queryFulfilled}){
                const result = await queryFulfilled;
                console.log('post mutation', result)
            }
        })
    })
})

export const {useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation} = postsApi;