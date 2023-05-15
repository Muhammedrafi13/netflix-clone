import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import { API_KEY,imageUrl } from '../../constants/constants';
import './Banner.css'



function Banner() {
  const [movie, setMovie] = useState("")
  useEffect(() => {
    axios.get(`/trending/all/day?api_key=${API_KEY}`).then((response)=>{
          console.log(response.data.results,'results')
          let x = Math.floor((Math.random() * 20));
          setMovie(response.data.results[x])
    })
 
  }, [])
  
  return (
    <div style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}}
    className="banner">
        <div className='content'>
            <h1 className='title'>{movie.title || movie.name}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie.overview}</h1>
        </div>
        <div className="fade_bottom"></div> 
    </div>
  )
}

export default Banner