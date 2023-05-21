import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
        prepareHeaders: (headers, {getState})=> {
            const token = localStorage?.getItem('learningBox-accessToken');
            console.log('token from headers', token)
            if(token){
                headers.set('authorization', `Bearer ${token}`)

            }
            return headers;
        },
    }),
    endpoints: ()=> ({}),
    tagTypes: []
})