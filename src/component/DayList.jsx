import React from 'react';
import data from '../db/data.json'

function DayList() {
   return ( 
      <ul className="list_day">
         {data.days.map(d=>(
            <li key={d.id}>
               Day {d.day}
            </li>
         ))}
      </ul>
    );
}

export default DayList;