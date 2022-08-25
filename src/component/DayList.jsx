import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


function DayList() {
   //const [days, setDays] = useState([]);
   ////빈배열가져옴
   //useEffect(()=>{
   //   fetch("http://localhost:3001/days")
   //   .then(res=> {
   //      return res.json();
   //   })
   //   .then(data => {
   //      setDays(data)
   //      console.log(data)
   //   })
   //},[])
   //렌더링결과가 실제dom에 찍혔을때

   const days = useFetch("http://localhost:3001/days")

   
   return ( 
      <ul className="list_day">
         {days.map(day=>(
            <li key={day.id}>
               <Link to={`/day/${day.day}`}>
                     Day {day.day}
               </Link>
               
            </li>
         ))}
      </ul>
    );
}

export default DayList;