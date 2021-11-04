import React from 'react'
import {BackButton} from "./BackButton";

function studentPage() {
    return (
        <div className="App">
            <div style={{display:"flex"}}>
                <BackButton/>
            </div>
            <h1>Basic Electronics</h1>

        </div>
    );
}

export default studentPage;