import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, name, available } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const phone = event.target.phone.value;
        const formattedDate = format(date, "PP");
        const body = {
            treatmentId: _id,
            treatmentName: name,
            date: formattedDate,
            slot: slot,
            patientName: user.displayName,
            patientEmail: user.email,
            patientPhone: phone
        };
        fetch("https://dry-fjord-64205.herokuapp.com/booking", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Service booked on ${formattedDate} at ${slot}`, { id: "newBooking" });
                    refetch();
                    setTreatment(null);

                }
                else {
                    console.log(data);
                    toast.error(`Appointment exists on ${data.booking?.date} at ${data.booking?.slot}`, { id: "existingBooking" });
                }
            })


    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" disabled value={`${format(date, "PP")}`} />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {available.map((slot, index) => <option key={index} value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" disabled name='name' defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="text" disabled name='email' defaultValue={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;