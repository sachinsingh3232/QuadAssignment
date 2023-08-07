import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const formContainerStyle = {
    maxWidth: '400px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
};

const labelStyle = {
    display: 'block',
    marginBottom: '5px',
};

const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    fontSize: '16px',
};

const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    padding: '10px 15px',
    fontSize: '16px',
    cursor: 'pointer',
};

const Book = () => {
    const movie = useLocation().state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if (!movie) navigate('/');
    }, [movie])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!movie) return;
        const ticketDetails = { name, email, phoneNumber, movieName: movie.name, day: selectedDay, time: movie.schedule.time };
        // Save userDetails to local storage or handle as needed
        localStorage.setItem('ticket Details:', JSON.stringify(ticketDetails));
        alert('Ticket Booked !');
    };

    return (
        <div style={formContainerStyle}>
            <h1> Movie: {movie?.name}</h1>
            <form onSubmit={handleSubmit}>
                <select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                    style={inputStyle}
                    required
                >
                    <option value="" disabled>
                        Select Day
                    </option>
                    {movie?.schedule.days.map((day) => (
                        <option key={day} value={day}>
                            {day}
                        </option>
                    ))}
                </select>
                <label style={labelStyle}>Name:</label>
                <input
                    type="text"
                    style={inputStyle}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label>Email:</label>
                <input type="email" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Phone Number:</label>
                <input type="tel" style={inputStyle} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                <button type="submit" style={buttonStyle}>
                    Book Ticket
                </button>
            </form>
            <Link to="/summary" state={movie} style={{ textDecoration: "none", color: "red" }}>Back to Movie Details</Link>
        </div>
    );
};

export default Book;
