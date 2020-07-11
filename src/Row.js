import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

//for printing the images we need a base url as well and then the desired we a can append 
const base_url = 'https://image.tmdb.org/t/p/original/';
function Row({title, fetchUrl, isLargeRow }){

    //state is basically the way to write variables in react
    //state is used here to keep track of movies
    const [movies, setMovies] = useState([]);

    //state which will give us the trailer urlwhenever we click on that thumbnail
    const [trailerUrl, setTrailerUrl] = useState("");

    //we need to populate the movies with some stuffs
    //a snippet of code which runs on a specific condition/variable i.e when the row loads
    //when the row loads we need to fetch that info/image and run this code
    //we goonna pull that request of the row when the row loads
    useEffect(()=>{
        //if we leave the [] empty we mean that, run once when the row loads and dont run again
        //if we put 'movies' it will run every single time the movie changes..its dependednt on the movie changes
        async function fetchData(){
            //making a request and wait for the answer to come back
            const request = await axios.get(fetchUrl);
            // we get this beginning url https://api.themoviedb.org/3
            //then we passed in the fetchURL FROM the app.js as a prop then it becomes for ex
            //for netflixoriginals  https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&     language=en-US

            //now so we get the data now we put that information in 'movies' 
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
   // console.log(movies);
    //whenever we use anything variable from outside inside of a useeffect, we have to addit at the end in the array, everytime this changes we have to update our useeffect  

    const opts ={
        height :'390',
        width:'100%',
        playerVars:{
            autoplay:1,
        }
    }
    
    //when user clicks on the picture
    const handleClick = (movie) =>{
        //if there is already a trailerurl and the vidoe is already playing 
        if(trailerUrl){
            setTrailerUrl('');
        }else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
            .then(url=>{
                // we need the url id like this www.youtube.com/watch?v='XtMTHY8Qkq'    
                const urlParams = new URLSearchParams(new URL(url).search);
                //will give the value of v
                setTrailerUrl(urlParams.get('v'));
                //in urlParams we get everything after that ?
            }).catch(error=>console.log(error));
        }
    }

    return(
        <div className='row'>

            {/* Tiltle trending noow etc. */ }
            <h2 className='row-title'>{title}</h2>

            {/* Images container, posters with movies */ }
            <div className='row_posters'>
                {/* several row posters */ }
                {movies.map(movie=>(
                    <img key={movie.id} onClick={()=>handleClick(movie)} className={`row_poster ${isLargeRow && 'row_posterLarge'}`} src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>

            {/* video embed */}
            {/* options and videoId */}
            {/* when we have a trailerUrl then i wanna show the video */}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;