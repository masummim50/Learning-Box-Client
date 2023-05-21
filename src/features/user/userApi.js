import { apiSlice } from "../api/apiSlice";
import { setUser } from "./userSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        login: builder.mutation({
            query: (data)=> ({
                url:'/login',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}){
                const result = await queryFulfilled;
                // console.log('fullfilled', result)
                dispatch(setUser(result.data));
                localStorage.setItem('learningBox-accessToken', JSON.stringify(result.data.accessToken));
            }
        }),
    })
})


export const {useLoginMutation} = userApi;