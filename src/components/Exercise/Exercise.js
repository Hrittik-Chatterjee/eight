import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const {name, img, time}= props.exercise
    const{handleAddToExerciseDetails, exercise}=props
   
    return (
        <div className="exercise">
            <img src={img} alt="" />
            <div className="exercise-info">
                <p className='exercise-name'>{name}</p>
                <p className='exercise-time'>Time: {time}</p>
            </div>
            <button onClick={ ()=>handleAddToExerciseDetails(exercise)} className='exercise-add-btn'>
                <p>Add exercise</p>
            </button>
        </div>
    );
};

export default Exercise;