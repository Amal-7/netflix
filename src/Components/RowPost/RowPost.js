import React, { useEffect,useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {img_url,API_KEY} from '../../constants/constants'
import Youtube from 'react-youtube'

const RowPost = (props) => {
  
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId] =useState('')
  useEffect(() => {
   axios.get(props.url).then((response)=>{
    setMovies(response.data.results)
    console.log(response.data);
   }).catch((err)=>{
    console.log(err);
   })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
const handleMovies=(id)=>{
 axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  if(response.data.results.length !==0){
    setUrlId(response.data.results[0])
  }else{
  console.log('trailor not available')
  }
 })
}
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>

        {movies.map((movie) =>

          <img onClick={()=>handleMovies(movie.id)} className={props.isSmall?'smallPoster' : 'poster'} src={`${img_url+movie.backdrop_path}`} alt="" />

        )
        }
      </div>
     {urlId && <Youtube videoId={urlId.key} opts={opts} /> }

    </div>
  )
}

export default RowPost