import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Word from './Word';

function Day() {
   

    //const parmas = useParams();
    //const day = parmas.day;
    const {day} = useParams();
    console.log(day)
    const [words, setWords] = useState([])
    
    useEffect(()=>{
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res=> {
           return res.json();
        })
        .then(data => {
            setWords(data)
           console.log(data)
        })
    },[day])

    return ( 
        <> 
        <h2 className='day'>Day{day}</h2>
            <table>
                <tbody>
                    {words.map(word=>(
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
     );
}

export default Day;