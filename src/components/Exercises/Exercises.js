import React, { useEffect, useState } from 'react';

import Exercise from '../Exercise/Exercise';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import"./Exercises.css"



const Exercises = () => {
    const [exercises, setExercises] =useState([])
    const [exerciseDetails, setExerciseDetails]=useState([])

    useEffect( ()=>{
        fetch('exercises.json')
        .then(res=> res.json())
        .then(data=> setExercises(data))
    }, [])
     
    const handleAddToExerciseDetails=(exercise)=>{
        const newExerciseDetails=[...exerciseDetails, exercise]
        
        setExerciseDetails(newExerciseDetails)
    }
    return (
        <div className='exercise-container'>
            <div className='exercise-list-container'>
                {
                    exercises.map(exercise=> <Exercise
                         key={exercise.id}
                         exercise={exercise}
                         handleAddToExerciseDetails={handleAddToExerciseDetails}
                    ></Exercise>)
                }
            </div>
            <div className='time-calculate-container'>
                    <ExerciseDetails exerciseDetails={exerciseDetails }></ExerciseDetails>

            </div>
        </div>
    );
};

export default Exercises;