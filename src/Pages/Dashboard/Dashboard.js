import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ClipboardCopyIcon } from '@heroicons/react/outline'

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content bg-[#F1F5F9]">
                <div className='flex lg:block'>
                    <h2 className='p-2 text-2xl font-bold text-primary'>Welcome to your Dashboard</h2>
                    <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <ClipboardCopyIcon className='w-5 h-5 active:text-accent'></ClipboardCopyIcon>
                    </label>
                </div>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Appointments</Link></li>
                    <li><Link to="/dashboard/myreviews">My Reviews</Link></li>
                    <li><Link to="/dashboard/myhistory">My History</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;