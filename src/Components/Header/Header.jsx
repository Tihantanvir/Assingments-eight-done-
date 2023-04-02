// @flow strict

import * as React from 'react';
import logo from '../../../public/images/tanvir.jpg.jpg'
function Header() {
    return (
        <div>
            <div className='flex justify-between py-16 px-4'>
         <div> 
           <h1 className='text-4xl font-bold text-orange-400'>programming <br/>
           <span>knowledge cafe</span></h1>
           </div>
           <div>
            <img className='w-20 rounded-full' src={logo} alt="" />
           </div>
          
         </div>
         <hr className='text-black font-bold' />
            
        </div>
    );
};

export default Header;