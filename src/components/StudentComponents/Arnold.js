import React from 'react';
import StudentPage from '../StudentPage';
import PostData from '../../data/studentData.json'

export function Arnold() {

    return(
            <div className="App">
            <StudentPage reqs = {PostData.find(({ name }) => name === 'Arnold Dickinson')}/>
            </div>
    );

}

export default Arnold;