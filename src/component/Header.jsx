import React from 'react';

function Header() {
    return ( 
        <>
            <div className="header">
                <h1>
                    <a href="/">토익 영단어(중급)</a>
                </h1>
                <div className="menu">
                    <a href="#x" className="link">단어추가</a>
                    <a href="#x" className="link">날짜추가</a>
                </div>
            </div>
        </>
     );
}

export default Header;