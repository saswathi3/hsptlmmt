import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const RecordCard = (props) => {
  const hsptlmmt = props.hsptlmmt



  return (
    <div className='card-container'>
      <img
        src='https://assets.indiabizforsale.com/business/upload_pic/web_system_7bb0874dc8fe0e5f8985ceb5c8ae556f.jpg'
        alt='Records'
        height={200}
      />
      <div className='desc bg-dark'>
        <h2>
          <Link to={ `/show-record/${hsptlmmt._id}` }>
            {hsptlmmt.name}  
          </Link> 
        </h2>
        <h3>{hsptlmmt.diseases}</h3>
        <p>{hsptlmmt.doctor}</p>
      </div>
    </div>  
  )
}

export default RecordCard;