import React from 'react';
import { useParams } from 'react-router-dom';
import wordData from '../db/data.json'
import Word from './Word';


function Day() {

    const day = useParams().day;
    const wordList = wordData.words.filter(word =>
            word.day === Number(day)
        ) 
  

    return ( 
        <>
            <h2>Day {day}</h2>
            <table>
                {wordList.map(word => (
                   <Word word={word} key={word.id}/>
                ))}
               
            </table>
        </>
     );
}

export default Day;