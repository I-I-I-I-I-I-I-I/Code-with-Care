import React from 'react';
import StudentPage from '../StudentPage';
import PostData from '../../data/studentData.json'

export function Jessie() {

    return(
            <div className="App">
            <StudentPage reqs = {PostData.find(({ name }) => name === 'Jessie Cruickshank')}/>
            </div>
    );

}

export default Jessie;