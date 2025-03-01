import React, { useEffect, useRef, useState } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'
const Titlecards=({title,category})=> {

  const [apiData , setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTZmYzhkNWQ5NjAzN2M2MDdmZjU4ZjBiZGQ0M2UzYyIsIm5iZiI6MTc0MDgxMTk2Mi4wODgsInN1YiI6IjY3YzJhZWJhOWIxNDRmMDIzOTY2OWIxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fkN8iEcERIyd0k2JQLjON2WQGJmAfTNMVP2V_MB7gY0'
    }
  };
  
 
  const handleWheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));


    cardsRef.current.addEventListener('wheel',handleWheel)
  },[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Nerflix"}</h2>
      <div className="card-list " ref={cardsRef}>
        {apiData.map((card,index)=>{
         return <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
          <p>{card.original_title}</p>
         </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecards