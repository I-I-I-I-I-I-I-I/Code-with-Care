import React from 'react';
import StudentPage from '../StudentPage';
import PostData from '../../data/studentData.json'

export function Harvey() {

    return(
            <div className="App">
            <StudentPage reqs = {PostData.find(({ name }) => name === 'Harvey Kennedy')}/>
            </div>
    );

}

export default Harvey;