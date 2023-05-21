import React from 'react';
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import { useCreatePostMutation } from '../features/post/postApi';
import { useNavigate } from 'react-router-dom';
const AddForm = () => {
    const user = useSelector(state => state.user.user);
    const [addpost, { isLoading, isSuccess }] = useCreatePostMutation();
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        data = { ...data, tags: data.tags.split(" "), user: user.id };
        console.log("after adding all", data)
        addpost({ ...data });
        navigate("/")
    }
    return (
        <div className='w-[100vw] h-[100vh] dark:bg-slate-700 bg-slate-500 pt-[80px]'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center bg-red-200 m-auto px-2 w-full sm:w-[90%] md:w-[70%] lg:w-[65%] rounded'>
                <div className="w-full">
                    <label htmlFor="Title"> Title</label>
                    <input required {...register("title", { required: true })} type="text" className='scrollbar-hide w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className="w-full">
                    <label htmlFor="Title"> Post</label>
                    <textarea required {...register("post", { required: true })} rows="6" type="text" className='scrollbar-hide w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className="w-full">
                    <label htmlFor="Title">Tags</label>
                    <input required {...register("tags", { required: true })} type="text" className='scrollbar-hide w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>

                <div className="flex flex-row gap-3 w-full">
                    <label htmlFor='Color' className="Color flex items-center justify-center">
                        <input type="radio" required {...register("color", { required: true })} value="text-orange-600" />
                        <div className="relative overflow-hidden h-[30px] w-[30px] rounded-[50%]">
                            <div className="bg-orange-600 h-full w-full absolute top-0 right-0"></div>
                        </div>
                    </label>
                    <label htmlFor='Color' className="Color flex items-center justify-center">
                        <input type="radio" {...register("color", { required: true })} value="text-pink-600" />
                        <div className="relative overflow-hidden h-[30px] w-[30px] rounded-[50%]">
                            <div className="bg-pink-600 h-full w-full absolute top-0 right-[50%]"></div>
                        </div>
                    </label>
                    <label htmlFor='Color' className="Color flex items-center justify-center">
                        <input type="radio" {...register("color", { required: true })} value="text-purple-600" />
                        <div className="relative overflow-hidden h-[30px] w-[30px] rounded-[50%]">
                            <div className="bg-purple-600 h-full w-full absolute top-0 right-[50%]"></div>
                        </div>
                    </label>
                </div>


                {/* <div className="colors w-full flex gap-2">
                    <div className="relative overflow-hidden h-[30px] w-[30px] rounded-[50%]">
                        <div className="bg-red-600 h-full w-full absolute top-0 right-[50%]"></div>
                        
                        <div className="bg-red-100 h-full w-full absolute top-0 left-[50%]"></div>
                    </div>
                    <div className="relative overflow-hidden h-[30px] w-[30px] rounded-[50%]">
                        <div className="bg-green-600 h-full w-full absolute top-0 right-[50%]"></div>
                        
                        <div className="bg-green-100 h-full w-full absolute top-0 left-[50%]"></div>
                    </div>
                    <div className="relative overflow-hidden h-[30px] w-[30px] rounded-[50%]">
                        <div className="bg-purple-600 h-full w-full absolute top-0 right-[50%]"></div>
                        
                        <div className="bg-purple-100 h-full w-full absolute top-0 left-[50%]"></div>
                    </div>
                </div> */}

                <div className="flex justify-end w-full my-2">
                    <button type='submit' className='bg-slate-700 text-white px-8 py-2 rounded '>Add Post</button>

                </div>
            </form>
        </div>
    );
};

export default AddForm;