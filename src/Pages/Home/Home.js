import React, { useEffect, useState } from 'react'
// import MovieCard from "../MovieCard/MovieCard";
import "./home.css"
import Axios from "axios";
import MovieCard from '../../components/MovieCard';

const Home = () => {
    const [MovieList, updateMovieList] = useState([]);

    const fetchData = async () => {
        const response = await Axios.get(
            `https://api.tvmaze.com/search/shows?q=all`,
        );
        console.log(response.data);
        updateMovieList(response.data);
    };
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="main">
            <div className="movielist">
                {MovieList?.length ? MovieList.map((movie, index) => (<MovieCard key={index} movie={movie.show} />))
                    : <img className='home' src="https://cdn.pixabay.com/photo/2012/04/14/13/58/negative-34025__340.png" alt="No Movie" />}
            </div>
        </div>
    )
}

export default Home