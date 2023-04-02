// @flow strict

// import * as React { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';




import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';






function MainContainer() {  
    // const [blogs, setBlogs] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart] = useState([]);
    const [mark, setMark] = useState(0);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);
    const handleBookmark = (blog) => {
        const newBlog = [...cart, blog];
        const exist = cart.find(pd => pd.blog_title === blog.blog_title)
        if(exist){
            toast.warn('Already Added', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setCart(newBlog);
        }else{
            setCart(newBlog);
        }
    }

    const handleMarkRead = (markTime) => {
        setMark((prevMark) => prevMark + markTime );
    }
    return (
        <>
               <div className='md:grid grid-cols-3 gap-6 mx-12 my-6'>
        <div className='col-span-2'>
            {
                blogs.map((blog) => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleMarkRead={handleMarkRead}></Blog>)
            }
        </div>
        <div className='col-span-1'>
            <Sidebar cart={cart} mark={mark}></Sidebar>
        </div>
        </div>   
        </>
    );
};

export default MainContainer;