import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
const Home = () => {
  return <>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="/show-allrecords">Records</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/create-record">Appointment</Link></li>
      </ul>
    </div>
    /</>
}
export default Home