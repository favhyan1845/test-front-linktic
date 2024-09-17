import {React, useState} from 'react';
import axios from 'axios';

const Form = ({bookings, setBookings}) => {
    
    const initialBookings = {
            user:'', 
            email:'',
            dateIn: '',
            dateOut: ''
    }
    const [booking, setBooking] = useState(initialBookings);
    const addBooking = (ev) =>{
        ev.preventDefault();

        // axios.get('http://localhost/linktic-prueba/reservation/public/booking/', booking)
        // .then((payload) =>{
        //     console.log(payload.data)
        //     // setBookings([
        //     //     ...bookings,
        //     //     payload.data.data
        //     // ])
        //     // setBooking(initialBookings);

        // }).catch((errors) =>{});
        
        if( booking.user.trim() === "" || booking.email.trim() === ""){return}
        console.log(Math.max(...bookings.map(booking => booking.id))+1);
        setBookings([
            ...bookings,
            {
                ...booking,
                id: bookings.lenght > 0 ? Math.max(...bookings.map(booking => booking.id))+1 : 1 
            }
        ])

    }

    return (
        <div className="has-background-default-light p-3">
            <form onSubmit={(ev)=>addBooking(ev)}>
                <div className="field">
                    <label htmlFor="Nombre">Nombre</label>
                    <div className="control">                        
                        <input className="input" value={booking.user} id="nombre" type="text" onChange={(ev) => setBooking({...booking, user: ev.target.value})}/>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="Email">Email</label>
                    <div className="control">                        
                        <input className='input' value={booking.email} id="email" type="email" onChange={(ev) => setBooking({...booking, email: ev.target.value})}/>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="Fecha de reserva">Fecha de reserva</label>
                    <div className="control">                      
                        <input className="input" value={booking.dateIn} id="dateIn" type="date" onChange={(ev) => setBooking({...booking, dateIn: ev.target.value})} />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="Fecha de salida">Fecha de salida</label>
                    <div className="control">                      
                        <input className="input" value={booking.dateOut} id="dateOut" type="date" onChange={(ev) => setBooking({...booking, dateOut: ev.target.value})} />
                    </div>
                </div>
                <button className='button is-primary'>Agregar</button>
            </form>
        </div>
    )
}

export default Form;
