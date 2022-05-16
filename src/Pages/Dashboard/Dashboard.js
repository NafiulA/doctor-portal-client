import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ClipboardCopyIcon } from '@heroicons/react/outline'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-[#F1F5F9]">
                <div className='flex lg:block'>
                    <h2 className='p-2 text-2xl font-bold text-primary'>Welcome to your Dashboard</h2>
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <ClipboardCopyIcon className='w-5 h-5 active:text-accent'></ClipboardCopyIcon>
                    </label>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Appointments</Link></li>
                    <li><Link to="/dashboard/myreviews">My Reviews</Link></li>
                    <li><Link to="/dashboard/myhistory">My History</Link></li>
                    {admin && <li><Link to="/dashboard/allusers">All Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;