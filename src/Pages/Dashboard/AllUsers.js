import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

import UserRows from './UserRows';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://dry-fjord-64205.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRows
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRows>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;