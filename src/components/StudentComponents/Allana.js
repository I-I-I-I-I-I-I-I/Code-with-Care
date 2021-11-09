import React from 'react';
import StudentPage from '../StudentPage';
import PostData from '../../data/studentData.json';

/* Student data imports for requirements are ordered : 
 1. Is TTS Required : boolean
 2. Is colourblind mode Required? : boolean
 3. Font size : String
 4. Font style : String
*/

export function Allana() {

return(
    <div className="App">
    <StudentPage reqs = {PostData.find(({ name }) => name === 'Allana Doherty')}/>
    </div>
    );
}

export default Allana;