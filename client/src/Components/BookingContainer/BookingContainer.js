import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getSignalCinema } from '../../Api';
import { updatePost } from '../../Redux/Action/CinemaAction';
import { errorNF } from '../../Redux/Action/notificationsAction';
import './BookingContainer.css';
import SeatsShower from './Set/SeatsShower';
const BookingContainer = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {cinemaId} = useParams()
    const [thisCinema, setThisCinema] = useState({})
    const [selectedSeat, setSelectedSeat] = useState([])
    const {date,time,name,set,_id}=thisCinema
    useEffect( () => {
        async function fetchData () {
            const data=await getSignalCinema(cinemaId)
            setThisCinema(data.data)
        }
        fetchData()
    }, [cinemaId])

    const getSelectedSeats=(seat)=>{
        if (selectedSeat.indexOf(seat)===-1) {
            if (selectedSeat.length<=9) {
                setSelectedSeat([...selectedSeat,seat])  
            }else{
                dispatch(errorNF('you can book 10 seat at a time'))
            }
        }else{
            setSelectedSeat(selectedSeat.filter(selected=>selected!==seat))  
        }

    } 

    const bookSeats=()=>{
        const updatedSeats = thisCinema.set.map(signalSeat=>{
            if (selectedSeat.indexOf(signalSeat.no)!==-1) {
                return {
                    no:signalSeat.no,
                    booked:true
                }
            }
            return signalSeat
        }
        )
        const updatedCinema = {...thisCinema,set:updatedSeats}
        history.push('/')
        dispatch(updatePost(_id,updatedCinema))
    }
    return (
        <>
            {
                thisCinema.name &&
                 <div className='BookingContainer'>
                    <div className="movie-info">
                        <div className="">
                            <h4>Movie Name: {name}</h4>
                            <span>{date} </span>
                            <span>, {time}</span>
                        </div>
                        <h4>total set selected {selectedSeat.length}/10</h4>
                    </div>
                    <div className="sit-container">
                        <SeatsShower getSelectedSeats={getSelectedSeats} seats={set} selectedSeat={selectedSeat}/>
                        <p>screen is this side</p>
                        <p>
                            <span>Booked <samp className='booked-color'>&nbsp;&nbsp;</samp></span>
                            <span>Available <samp className='Available-color'>&nbsp;&nbsp;</samp></span>
                            <span>Selected <samp className='Selected-color'>&nbsp;&nbsp;</samp></span>
                        </p>
                        {
                            selectedSeat.length !==0 &&
                            <button 
                                className='squareBtn'
                                onClick={bookSeats}
                            >book</button>
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default BookingContainer;