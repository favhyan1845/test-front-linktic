import React from 'react';
import Booking from './Booking';

const Bookings = ({bookings, setBookings}) => {

  const deleteBooking = (id, e) =>{
    e.preventDefault();
    const newBookings = bookings.filter(booking => id != booking.id );
    setBookings(newBookings);
    
  }
  const updateBooking = (newBooking) =>{
    setBookings(
      bookings.map(booking => booking.id == newBooking.id ? newBooking: booking)
    )
  }

  return (
      <div className='columns is-multiline'>
          {
          bookings.map(booking =>{
              return <Booking key={booking.id} booking={booking} deleteBooking={deleteBooking} updateBooking={updateBooking}></Booking>
          })}
      </div>
      );
}
export default Bookings;
