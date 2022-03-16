import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const SingleMovieDetails = () => {

  const [data, setData] = useState([])
   const {id} = useParams()
   
   useEffect(()=>{
     axios(`https://movie-fake-server.herokuapp.com/data/${id}`)
     .then((res)=>setData(res.data))
     .catch((err)=>console.log(err))
   },[])

    // make a request to get the details
  return <>
      {
        <div style={{marginTop:"30px"}}>
        <img src={data.image_url} alt="" />
        <h4>Title:{data.movie_name}</h4>
        {<p>Release On :{data.release_date}</p>}
        {<p>Rating: {data.rating}</p>}
        </div>
      }
  </>;
};
