import {React, useEffect, useState} from 'react';
import Form from './components/Form';
import Bookings from './components/Bookings';
import axios from 'axios';


export default function Dashboard(){

    useEffect(() => {
        axios.get('http://localhost/linktic-prueba/reservation/public/')
        .then((payload) => {
            setBookings(payload.data)
        }).catch((err)=>{
            console.log(err)
        });
    },[]);

    const [bookings, setBookings] = useState([]);


return(
        <div className="container">
            <h1 className='title has-text-centered mt-5'>Booking reservation</h1>
            <Bookings bookings={bookings} setBookings={setBookings}></Bookings>
            <Form bookings={bookings} setBookings={setBookings}></Form>
        </div>
        
    )
}