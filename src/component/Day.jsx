import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGet from '../hooks/useGet';
import Word from './Word';

function Day() {
    const { day } = useParams();
    const words = useGet(`http://localhost:3001/words?day=${day}`)
    console.log(words)
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