import React from 'react';
import { useSelector } from 'react-redux';
import CinemaCard from './CinemaCard/CinemaCard';
import './CinemaContainer.css';

const CinemaContainer = () => {
    const cinemaData = useSelector(state => state.cinemaData)
    return (
        <div className='FoodItemContainer'>
            {/* <h1>Available Movie List</h1> */}
        {
            cinemaData.length>0

            ?cinemaData.map(cinema =>
                <CinemaCard
                    key={cinema._id}
                    cinema={cinema}
                />)
            :'loading...'
        }
    </div>
    );
};

export default CinemaContainer;