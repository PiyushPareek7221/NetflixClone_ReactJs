import React, {useState, useEffect} from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';
//
function Banner(){
    
    //making a request for a movie 
    const [movie, setMovie] = useState([]);

    //piece of code that runs on a condition
    //will run when the banner component loads
    useEffect(()=>{
        //when we are making a call to an external api we use async func
        async function fetchData(){
            //fetching the data
            const request = await axios.get(requests.fetchNetflixOriginals);
            //we have twenty movies in this array requests.data.results but we need only one movie

            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]);
        }   
        fetchData();
    },[]);
    
    console.log(movie)

    function truncate(str, n){
        return str?.length>n ? str.substr(0,n-1) + "..." :str;
    }

    return (
        <header className='banner' style={{
            backgroundSize:'cover',
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:'center center'
        }}>
            {/* the ? is  because if the image is not found it will not crash and delay elegantly */}
            {/* A background image of the title */}
            <div className='banner_contents'>

            {/* title */}
            <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>

            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            {/* A DIV having two buttons play and myChat */}
            
            <h1 className='banner_description'>
                {truncate(movie?.overview, 200)}   
            </h1>
            {/* description */}
            </div>
            <div className='banner--fadeBottom' />
        </header>
    )
}

export default Banner;