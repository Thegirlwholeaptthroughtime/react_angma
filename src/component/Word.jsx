import React from 'react';
import { useState } from 'react';

function Word({word : w}) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    const handleShow = () =>{
        setIsShow(!isShow)
    }

    const handleCheck = () =>{
        //fetch(`http://localhost:3001/words/${word.id}`,
        fetch(`http://localhost:3001/words/${word.id}`,
        {
            //요청의옵션들
            method : "PUT",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({
                ...word, 
                isDone : !isDone
            })
        })
        .then(res => {
            if(res.ok){
                setIsDone(!isDone)
            }
        })
    }


    const del = () => {
        if(window.confirm('삭제할라고?')){
            fetch(`http://localhost:3001/words/${word.id}`,{
                method : "DELETE",
        }).then(res =>{
            if(res.ok){
                setWord({id:0})
            }
        })
        }
    }
    if(word.id===0){
        return null
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
                   <button onClick={del} className='btn_del'>삭제</button>
               </td>
           </tr>
        </>
     );
}

export default Word;