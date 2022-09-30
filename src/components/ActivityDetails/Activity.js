import React from 'react';
import'./Activity.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Activity = () => {

    const completedActivity=()=>{
            toast('Activity Completed Congratulations Hero Alom!!')
    }
    return (
        <>
            <div >
            <button className='btn-activity-complete' onClick={completedActivity}>
           <p> Activity Completed</p>
            </button>
            </div>

        <ToastContainer />
        </>
    
    );
};

export default Activity;