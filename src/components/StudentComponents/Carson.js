import React from 'react';
import StudentPage from '../StudentPage';
import PostData from '../../data/studentData.json'

export function Carson() {

    return(
            <div className="App">
            <StudentPage reqs = {PostData.find(({ name }) => name === 'Carson Jackson')}/>
            </div>
    );

}

export default Carson;