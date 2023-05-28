import { apiSlice } from "../api/apiSlice";

export const postsApi = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        getPosts: builder.query({
            query: ()=> '/home'
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
            async onQueryStarted(args, {queryFulfilled,dispatch}){
                const result = await queryFulfilled;
                console.log('post mutation', result.data.data)
                await dispatch(
                    apiSlice.util.updateQueryData('getPosts', undefined, (draftPosts) => {
                        console.log(JSON.stringify(draftPosts))
                      draftPosts.data.posts.unshift(result.data.data)
                    })
                  )
            }
        })
    })
})

export const {useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation} = postsApi;