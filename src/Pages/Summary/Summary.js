import React, { useEffect } from 'react'
import "./Summary.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate();
    const movieInfo = useLocation().state;
    useEffect(() => {
        if (!movieInfo) navigate('/');
    }, [movieInfo])
    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html')
        return doc.body.textContent;
    }
    return (
        <div className='summary'>
            <div className='details'>
                {movieInfo ? <>
                    <img className='poster' src={movieInfo?.image?.original} alt="" />
                    <div className='content'>
                        <span className='MovieName'><span><i><b>{movieInfo?.name}</b></i></span></span>
                        <span className='MovieInfo'>Genre: <span>{movieInfo?.genres[0]}</span></span>
                        <span className='MovieInfo'>Rating: <span>{movieInfo?.rating.average}</span></span>
                        <span className='MovieInfo'>Language: <span>{movieInfo?.language}</span></span>
                        <span className='MovieInfo'>Runtime: <span>{movieInfo?.runtime}</span></span>
                        <span className='MovieInfo'>Schedule: <span>"Day: "
                            {movieInfo?.schedule.days.map((day) => (
                                day + " ,"
                            ))}
                        </span><span>"Time: "{movieInfo?.schedule.time}</span></span>
                        <span className='MovieInfo'>Summary: <span>{getText(movieInfo?.summary)}</span></span>
                    </div>
                </> : "Loading..."}
            </div>
            <Link to={`/book`} state={movieInfo} style={{ textDecoration: "none" }}>
                <button className='button'>Book Ticket</button>
            </Link>
        </div>
    )
}

export default Details