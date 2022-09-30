import React from 'react';
import Activity from '../ActivityDetails/Activity';

import './ExerciseDetails.css'


const ExerciseDetails = ({exerciseDetails}) => {
    
   let total=0
   for (const exercise of exerciseDetails){
            total= total + exercise.time
   }
   
   



   

    return (
        <div>
        <div className='profile-container'>
            <div className='name-image'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Ne9aX14qnG_W-zSEBfAr_dZZ3dgT9H3Z_nzgEqrQ4fxS-60J5OXCuy1YzSHjm-S7n5o&usqp=CAU" alt="" />
            <h3>Hero Alom</h3>
           
            </div>
            <span>Dhaka, Bangladesh</span>
            <div className='profile-details'>
                <p>75 kg <br /><span>Weight</span></p>
                <p>5.5 <br /><span>Height</span></p>
                <p>99 yrs<br /> <span>Age</span> </p>
            </div>
        </div>
            
        <div className='add-break'>
            <h3>Add A Break</h3>
           <div className='break-time-list'>
                <button>10 <span>M</span></button>
                <button>15 <span>M</span></button>
                <button>20 <span>M</span></button>
                <button>25 <span>M</span></button>
                <button>30 <span>M</span></button> 
            </div> 
            
        </div>


        <div className='time-calculate-all'>
            <div className='ex-details'>
                <p>Exercises Time : <span>{total} Minutes</span></p>
                <p>Break Time : <span>{}</span></p>
                
            </div>
            
           <Activity></Activity>
        </div>
        </div>
    );
};
const times=[1,2,3,4]
times.map(time=>times)
export default ExerciseDetails;