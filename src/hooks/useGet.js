import { useEffect, useState } from "react";
import axios from "axios";

export default function useGet(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url)
     .then(Response=>{
      setData(Response.data)
     })
  }, [url]);

  return data;
}