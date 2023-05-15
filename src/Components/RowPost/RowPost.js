import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {imageUrl,API_KEY } from '../../constants/constants'
import YouTube from 'react-youtube'
import './RowPost.css'
import { CanceledError } from 'axios'



function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] = useState("")
  useEffect(() => {
    axios.get(props.url).then((response)=>{
         console.log(response.data.results)
         setMovies(response.data.results)
         console.log(movies,'mv')
    })
  }, [])
  const handleMovieTrailer = (id)=>{
     axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results,'youtube video oo')
      if(response.data.results.length!=0){
        setUrlId(response.data.results[0])
      }
    
     }).catch((error)=>{
      console.log(error)
     })
      
  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj,index)=>
                 <img  onClick={()=>handleMovieTrailer(obj.id)} key={index} className={props.isSmall ?'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`}  alt="poster" />
          )}
 
        </div>
      {urlId &&  <YouTube videoId={urlId.key} opts={opts} />}
       
    </div>
  )
}

export default RowPost