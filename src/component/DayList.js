import React from 'react';
import { Link } from 'react-router-dom';
import wordData from '../db/data.json'

function DayList() {
    return ( 
        <>
        <ul className='list_day'>
            {wordData.days.map(day => (
                 <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                 </li>
            ))}
           
        </ul>
        </>
     );
}

export default DayList;