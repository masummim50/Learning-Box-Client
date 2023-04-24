import React from 'react';
import {useForm} from 'react-hook-form'
const AddForm = () => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data)=> {
        console.log(data)
    }
    return (
        <div className='w-[100vw] h-[100vh] dark:bg-slate-700 bg-slate-500 pt-[80px]'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center bg-red-200 m-auto px-2 w-full sm:w-[90%] md:w-[70%] lg:w-[65%] rounded'>
            <div className="w-full">
                    <label htmlFor="Title"> Title</label>
                    <input required {...register("title", {required:true})} type="text" className='scrollbar-hide w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className="w-full">
                    <label htmlFor="Title"> Post</label>
                    <textarea required {...register("post", {required:true})} rows="6" type="text" className='scrollbar-hide w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className="w-full">
                    <label htmlFor="Title">Tags</label>
                    <input required {...register("tags", {required:true})} type="text" className='scrollbar-hide w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                {/* <div>
                    <label className='block' htmlFor="Title">Title</label>
                <input type="text" {...register("title", {required:true})} className='shadow appearance-none border rounded w-[80%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                </div>
                <div>
                    <label className='block' htmlFor="Title">Title</label>
                <textarea type="textarea" {...register("post", {required:true})} className='shadow appearance-none border rounded w-full h-[200px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                </div>
                <div>
                    <label className='block' htmlFor="Title">Title</label>
                <input type="text" {...register("tags", {required:true})} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                </div> */}
                <div className="flex flex-row gap-3 w-full">
                <label htmlFor='Color' className="Color flex items-center justify-center">
                <input type="radio" required {...register("color", {required:true})} value="red" />
                <div className="relative overflow-hidden h-[30px] w-[30px] rounded-[50%]">
                        <div className="bg-red-600 h-full w-full absolute top-0 right-[50%]"></div>
                        
                        <div className="bg-red-100 h-full w-full absolute top-0 left-[50%]"></div>
                    </div>
                </label>
                <label htmlFor='Color' className="Color flex items-center justify-center">
                <input type="radio" {...register("color", {required:true})} value="green" />
                <div className="relative overflow-hidden h-[30px] w-[30px] rounded-[50%]">
                <div className="bg-green-600 h-full w-full absolute top-0 right-[50%]"></div>
                        
                        <div className="bg-green-100 h-full w-full absolute top-0 left-[50%]"></div>
                    </div>
                </label>
                <label htmlFor='Color' className="Color flex items-center justify-center">
                <input type="radio" {...register("color", {required:true})} value="purple" />
                <div className="relative overflow-hidden h-[30px] w-[30px] rounded-[50%]">
                <div className="bg-purple-600 h-full w-full absolute top-0 right-[50%]"></div>
                        
                        <div className="bg-purple-100 h-full w-full absolute top-0 left-[50%]"></div>
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