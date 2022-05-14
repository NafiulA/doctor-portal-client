import React from 'react';
import loading from '../../../assets/images/loading.gif';

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <img src={loading} alt="" />
        </div>
    );
};

export default Loading;