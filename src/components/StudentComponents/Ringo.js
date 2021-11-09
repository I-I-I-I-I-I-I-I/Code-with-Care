import React from 'react';
import StudentPage from '../StudentPage';
import PostData from '../../data/studentData.json'

export function Ringo() {

    return(
            <div className="App">
            <StudentPage reqs = {PostData.find(({ name }) => name === 'Ringo Starr')}/>
            </div>
    );

}

export default Ringo;