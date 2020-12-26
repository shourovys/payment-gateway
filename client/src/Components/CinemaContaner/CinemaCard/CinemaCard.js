import React from 'react';
import { Link } from 'react-router-dom';
import './CinemaCard.css';

const CinemaCard = ({cinema}) => {
    const {_id,name,date,time,img}=cinema;
    return (
        <div className='cinemaCard'>
            <Link to={'/cinema/' + _id} className='cinemaCardInfo'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <div className="info">
                    <p>Date:&nbsp;{date} &nbsp;</p>
                    <p>at&nbsp;{time}</p>
                </div>
            </Link>
        </div>
    );
};

export default CinemaCard;