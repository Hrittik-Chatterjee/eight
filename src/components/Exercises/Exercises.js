import React, { useEffect, useState } from 'react';
import"./Exercises.css"

const Exercises = () => {
    const [exercises, setExercises] =useState([])
    useEffect( ()=>{
        fetch('exercises.json')
        .then(res=> res.json())
        .then(data=> setExercises(data))
    }, [])
    return (
        <div className='exercise-container'>
            <div className='exercise-list-container'>
                <h2>this is for exercise list:{exercises.length}</h2>
            </div>
            <div className='time-calculate-container'>
    
            </div>
        </div>
    );
};

export default Exercises;