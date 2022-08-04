import React from 'react';
import wordData from '../db/data.json'


function Day() {

    const day = 1;
    const wordList = wordData.words.filter(word =>
            word.day === 1
        ) 
    console.log(wordList)
    return ( 
        <>
            <table>
                {wordList.map(word => (
                    <tr key={word.id}>
                         <td>
                            {word.eng}
                        </td>
                        <td>
                            {word.kor}
                        </td>
                    </tr>
                ))}
               
            </table>
        </>
     );
}

export default Day;