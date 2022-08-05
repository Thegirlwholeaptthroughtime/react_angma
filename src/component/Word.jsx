import React from 'react';
import { useState } from 'react';

function Word({word}) {

    const [isShow, setIsShow] = useState(false);
    function toggleShow(){
        setIsShow(!isShow)
    }
    return ( 
        <>
         <tr className={word.isDone ? 'off' : 'on'}>
             <td><input type="checkbox" checked={word.isDone}></input></td>
             <td>
                 {word.eng}
             </td>
             <td>
                 {isShow && word.kor}
             </td>
             <td>
                 <button onClick={toggleShow}>
                    뜻{isShow ? '숨기기' : '보기'}
                </button>
                 <button className='btn_del'>삭제</button>
             </td>
         </tr>
        </>
     );
}

export default Word;