import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../db/data.json'
import Word from './Word';

function Day() {
   

    //const parmas = useParams();
    //const day = parmas.day;
    const {day} = useParams();
    const wordList = data.words.filter(word => word.day === Number(day))
    return ( 
        <> 

        <h2 className='day'>Day{day}</h2>
            <table>
                <tbody>
                    {wordList.map(word=>(
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
     );
}

export default Day;