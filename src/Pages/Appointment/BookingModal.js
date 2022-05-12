import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        setTreatment(null);
    }

    const { name, slots } = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" disabled value={`${format(date, "PP")}`} />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {slots.map(slot => <option value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" name='name' placeholder="Your name" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;