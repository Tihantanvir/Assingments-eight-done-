// @flow strict

import * as React from 'react';

function Sidebar({cart, mark }) {
    let length = 0;
    for(const product of cart){
        length = length + 1;
  }
    return (
        <>
           <div style={{position: 'sticky', top: 2}}>
            <div className='my-10 shadow-md p-4 bg-slate-200 border-2 border-indigo-300 rounded-md'>
            <h1 className='font-semibold text-indigo-600 text-center'>Spent time on read : {mark} min</h1>
            </div>
            <div className='bg-gray-200 py-6 rounded-md'>
                <h1 className='font-bold ms-6'>Bookmarked Blogs : {length}</h1>
                {
                    cart.map((singleblog, ind) => <div className='mx-6 my-4 shadow-sm p-4 bg-white border-2 border-slate-200 rounded-md' key={ind}>
                    <h1 className='font-bold '>{singleblog.blog_title}</h1>
                    </div>
                    )
                }
            </div>
        </div>   
        </>
    );
};

export default Sidebar;