import React from 'react';
import data from '../db/data.json'

function Day() {
    const day = 1;
    const wordList = data.words.filter(word => word.day === day)
    return ( 
        <>
            <table>
                <tbody>
                    {wordList.map(word=>(
                    <tr key={word.id}>
                        <td>{word.kor}</td>
                        <td>{word.eng}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
     );
}

export default Day;