import React, { useEffect, useState } from 'react'
import './Player.css'
import backArrow_icon from '../../assets/images/backArrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
function Player() {

  const {id}=useParams();
  const navigate = useNavigate()

  const [ apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTZmYzhkNWQ5NjAzN2M2MDdmZjU4ZjBiZGQ0M2UzYyIsIm5iZiI6MTc0MDgxMTk2Mi4wODgsInN1YiI6IjY3YzJhZWJhOWIxNDRmMDIzOTY2OWIxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fkN8iEcERIyd0k2JQLjON2WQGJmAfTNMVP2V_MB7gY0'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])


  return (

    <div className='player'>
  <img 
      src={backArrow_icon} 
      alt="Back" 
      onClick={() => navigate(-2)} // Ensure proper function call
      style={{ cursor: "pointer" }} // Optional: Indicate it's clickable
     />    
      <iframe width='90%' height='90%' src={`https://WWW.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>

      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
