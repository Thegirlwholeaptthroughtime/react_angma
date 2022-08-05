import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <>
         <h1>
            <Link to='./'>토익 영단어(고급)</Link>
       
         </h1>
         <div className='menu'>
            <a href='#x' className='link'>단어추가</a>
            <a href='#x' className='link'>Day 추가</a>
         </div>
        </>
     );
}

export default Header;