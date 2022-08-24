import React from 'react';
import { useState } from 'react';

function Word({word}) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    const handleShow = () =>{
        setIsShow(!isShow)
    }

    const handleCheck = () =>{
        setIsDone(!isDone)
    }
    return ( 
        <>
           <tr className={isDone ? "off" : ""}>
               <td>
                   <input type="checkbox" checked={isDone} onChange={handleCheck}/>
               </td>
               <td>{word.eng}</td>
               <td>{isShow ? word.kor:""}</td>
               <td>
                   <button onClick={handleShow}>{isShow ? "뜻 숨기기" : "뜻 보기"}</button>
                   <button className='btn_del'>삭제</button>
               </td>
           </tr>
        </>
     );
}

export default Word;