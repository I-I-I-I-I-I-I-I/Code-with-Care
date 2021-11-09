import React from 'react';
import StudentPage from '../StudentPage';
import PostData from '../../data/studentData.json'

export function Patrick() {

    return(
            <div className="App">
            <StudentPage reqs = {PostData.find(({ name }) => name === 'Patrick Wimboway')}/>
            </div>
    );

}

export default Patrick;