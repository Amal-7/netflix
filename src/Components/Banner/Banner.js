import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {API_KEY,img_url} from '../../constants/constants'
import './Banner.css'

const Banner = () => {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      
      setMovie(response.data.results[0])
    })
  },[])
  return (
    <div style={{backgroundImage:`url(${movie ? img_url+movie.backdrop_path :''})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title:''}</h1>
            <div className='banner_buttons'>
                <button className='button'>play</button>
                <button className='button'>My List</button>

            </div>
            <h1 className='description'>{movie?movie.overview:''}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner