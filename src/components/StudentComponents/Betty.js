import React from 'react';
import StudentPage from '../StudentPage';
import PostData from '../../data/studentData.json'

export function Betty() {

    return(
            <div className="App">
            <StudentPage reqs = {PostData.find(({ name }) => name === 'Betty Charles')}/>
            </div>
    );

}

export default Betty;