import {useState, React} from 'react'

const Booking = ({booking, deleteBooking, updateBooking}) => {

    const [modeEdit, setModeEdit] = useState(false)
    const [item, setItem] = useState(booking)

    const toggle = (e) =>{
        e.preventDefault();
        setModeEdit(!modeEdit);
        setItem(booking)
    }
    const edit = (e) => {
        e.preventDefault();
        updateBooking(item)
        setModeEdit(false);
    }
    return (
    <div className='column is-one-quarter'>
        <div className="card">
            <div className="card-content">
                <header className="card-header">
                    <p className="title is-12">
                        <strong>Numero de reserva:</strong> #{booking.id}
                    </p>
                </header>
                <div className="content">
                    <time className='subtitle is-6'>
                    
                    {
                        modeEdit ?                        
                        <div className="field">
                            <label htmlFor="Fecha de reserva">Fecha de reserva</label>
                            <div className="control">                      
                                <input className="input" type="date" value={item.dateIn} onChange={(ev) => setItem({...item, dateIn: ev.target.value})} />
                            </div>
                        </div>:
                        <div className="field"><strong>Fecha de reserva:</strong> {booking.dateIn}</div>
                    }</time>
                    <time className='subtitle is-6'>
                    {
                        modeEdit ?
                        <div className="field">
                            <label htmlFor="Fecha de salida">Fecha de salida</label>
                            <div className="control">                      
                                <input className="input" type="date" value={item.dateOut} onChange={(ev) => setItem({...item, dateOut: ev.target.value})}/>                                
                            </div>
                        </div>:
                        <div className="field"><strong>Fecha de salida:</strong> {booking.dateOut}</div>
                    }</time>
                </div>
                <div className="subtitle is-6">
                    {
                        modeEdit ?                        
                        <div className="field">
                            <label htmlFor="Nombre">Nombre</label>
                            <div className="control">                        
                                <input className="input" type="text" value={item.user} onChange={(ev) => setItem({...item, user: ev.target.value})}/>
                            </div>
                        </div>:
                        <div className="field">
                            <strong>Nombre:</strong> {booking.user}</div>
                    }
                </div>
                <div className="subtitle is-6">
                    {
                        modeEdit ?
                        <div className="field">
                            <label htmlFor="Email">Email</label>
                            <div className="control">                        
                                <input className='input' type="email" value={item.email} onChange={(ev) => setItem({...item, email: ev.target.value})}/>
                            </div>
                        </div>:
                        <div className="field"><strong>email:</strong> {booking.email}</div>
                    }
                </div>
            </div>
            <footer className='card-footer'>
                        <a href="{'/'}" className='card-footer-item' onClick={(e) => toggle(e)}>{modeEdit ? 'Cancelar' : 'Editar'}</a>
                        {
                            modeEdit ? 
                            <a href={'/'} className='card-footer-item' onClick={(e) => edit(e)}>Guardar</a>
                            :
                            <a href={'/'} className='card-footer-item' onClick={(e) => deleteBooking(booking.id, e)}>Eliminar</a>
                        }
            </footer>
        </div>
    </div>
    )
}

export default Booking;
