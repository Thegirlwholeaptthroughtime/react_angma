import React from 'react';
import wordData from '../db/data.json'

function DayList() {
    return ( 
        <>
        <ul className='list_day'>
            {wordData.days.map(day => (
                 <li key={day.id}>Day {day.day}</li>
            ))}
           
        </ul>
        </>
     );
}

export default DayList;