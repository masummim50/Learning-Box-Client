import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const local = "http://localhost:5000/";
const server = 'https://learning-box-server.onrender.com/'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: local,
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