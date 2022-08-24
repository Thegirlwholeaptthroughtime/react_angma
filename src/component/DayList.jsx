import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function DayList() {
   const [days, setDays] = useState([]);
   //빈배열가져옴

   const [count, setCount] = useState(0);
   const handleCnt = () =>{
      setCount(count + 1)
   }

   useEffect(()=>{
      console.log("count change")
   },[handleCnt])
   //렌더링결과가 실제dom에 찍혔을때
   return ( 
      <ul className="list_day">
         {days.map(d=>(
            <li key={d.id}>
               <Link to={`/day/${d.day}`}>
                     Day {d.day}
               </Link>
               
            </li>
         ))}

         <p>{count}</p>
         <button onClick={handleCnt}></button>
      </ul>
    );
}

export default DayList;