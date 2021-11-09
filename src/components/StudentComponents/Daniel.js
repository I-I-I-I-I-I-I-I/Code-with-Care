import React from 'react';
import StudentPage from '../StudentPage';
import PostData from '../../data/studentData.json'

export function Daniel() {

    return(
            <div className="App">
            <StudentPage reqs = {PostData.find(({ name }) => name === 'Daniel Hickory')}/>
            </div>
    );

}

export default Daniel;