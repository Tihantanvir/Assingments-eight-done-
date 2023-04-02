// @flow strict

import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


function Blog({blog, handleBookmark, handleMarkRead}) {
    return (
        <>
          <div>
          <div className="card bg-base-100 shadow-md my-6 py-3">    
          <img className='rounded-xl p-1' src={blog.blog_cover_image} alt="Shoes" />
           <div className="card-body">
           <div className='flex justify-between items-center'> 
           <div className='flex'>
           <img className="w-10 h-10 rounded-full me-3" src={blog.author_image} alt="" />
           <div>
             <h6 className="card-title">{blog.author_name}</h6>
             <p>{blog.publish_date}</p>
             </div>
           </div>
             <div >
                 <p >{blog.read_time} min read <FontAwesomeIcon onClick={() => handleBookmark(blog)} icon={faBookmark} /></p>
             </div>
           </div>
             <h2 className="card-title text-3xl">{blog.blog_title}</h2>
           </div>
           <div className='flex ms-5'>
             <p>#beginners</p>
             <p className='ms-4'>#programming</p>
             <p className='ms-4'>#Coding</p>
           </div>
           <p onClick={() => handleMarkRead(blog.read_time)} className='m-5 text-blue-700 font-semibold underline cursor-pointer' href="">Mark as read</p>
         </div>
       </div>   
        </>
    );
};

export default Blog;