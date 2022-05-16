import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, "PP");
    const { data: services, isLoading, refetch } = useQuery(["available", formattedDate], () =>
        fetch(`https://dry-fjord-64205.herokuapp.com/available?date=${formattedDate}`)
            .then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='text-center'>
            <p className='text-xl text-primary font-bold'>Available appointments on {format(date, "PP")}</p>
            <div className='w-4/5 py-12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
        </div >
    );
};

export default AvailableAppointments;