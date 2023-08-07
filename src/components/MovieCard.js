import React from 'react'
import "./movieCard.css"
import { Link } from 'react-router-dom'
const MovieCard = ({ movie }) => {
    return (
        <Link to={`/summary`} state={movie} style={{ textDecoration: "none" }}>
            <div className='moviecard' >
                <img src={movie.image?.original} alt="" />
                <span className='title'>{movie.name}</span>
                <div className='column2'>
                    <span className='year'>Language: {movie.language}</span>
                    <span className='movie'>Rating: {movie.rating.average}</span>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard