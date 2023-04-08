// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css'
// const Home = () => {
//   return <>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="about">About</Link></li>
//         <li><Link to="show-list">Records</Link></li>
//         <li><Link to="/doctors">Doctors</Link></li>
//         <li><Link to="/create-record">Appointment</Link></li>
//       </ul>
//     </div>
//     <div className='hero-section'>
//       <div className='container'>
//         <div className='row'>
//           {/* this div is for content */}

//         </div>
//         <div className='row'>
//           {/* this div is for image */}

//         </div>


//       </div>
//     </div>

//     {/* <div>
//         <img src='./img/im.svg' />
//     </div> */}
//     </>
// };




// import React,{useState} from "react";
// import { Link } from 'react-router-dom';
// import "../App";
 
// function Home(props) {
//     const[active, setActive] =useState('nav__menu');
//     const navToggle = () =>{
//         active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
//     }

//     return (
//         <nav className="nav">
//             <a href="#" className="nav__brand">Lifeflash</a>
//             <ul className={active}>
//                 <li className="nav__item"><Link to="/">Home</li> 
//                 <li className="nav__item"><Link to="about">About</li> 
//                 <li className="nav__item"><Link to="show-list">Records</li> 
//                 <li className="nav__item"><Link to="/doctors">Doctors</li>
//                 <li className="nav__item"><Link to="/create-record">Appointment</li>
//             </ul>
//             <div onClick={navToggle} className="nav__toggler">
//             <div className="line1"></div>
//             <div className="line2"></div> 
//             <div className="line3"></div>
//             </div>
//           </nav>
//     );
// }

// export default Home;