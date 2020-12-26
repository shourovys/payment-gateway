import React from 'react';
import './SeatsShower.css';
const SeatsShower = ({seats,getSelectedSeats,selectedSeat}) => {
    return (
        <div className='SeatsShower' >
            {
                seats.map(seat=>
                    <li 
                    key={seat.no} 
                    className={seat.booked?`seat booked`:'seat not-booked'}
                    onClick={ !seat.booked? ()=>getSelectedSeats(seat.no): ''}
                    style={{backgroundColor: selectedSeat.indexOf(seat.no)!==-1&&'#2dc492'}}
                    >
                        <span>{seat.no}</span>
                    </li>
                )
            }
        </div>
    );
};

export default SeatsShower;