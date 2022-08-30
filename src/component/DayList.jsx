import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useGet from "../hooks/useGet";

export default function DayList() {
  
 /*  const [days, setDays] = useState([])
  console.log(days)
  console.log("111")

  useEffect(()=>{
   axios.get("http://localhost:3001/days")
    .then(Response=>{
      setDays(Response.data)
      console.log(Response.data)
    })
  },[]) */
 
  const days = useGet("http://localhost:3001/days")
  console.log(days)
  return (
    <ul className="list_day">
      {days.map(day => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}