import React from 'react';
import Arnold from './studentImages/Arnold.png'
import Betty from './studentImages/Betty.jpg'
import Carson from './studentImages/Carson.jpg'
import Daniel from './studentImages/Daniel.jpg'
import Jessie from './studentImages/Jessie.jpg'
import Patrick from './studentImages/Patrick.jpg'
import blank_profile from "../images/blank_profile.png"

const Images = ({names}) => {
    switch (names) {
        case "Arnold":
            return (<img style={{width: "100%", height: "68%"}} src={Arnold} alt="Arnold"/>);
        case "Betty":
            return (<img style={{width: "100%", height: "68%"}} src={Betty} alt="Betty"/>);
        case "Carson":
            return (<img style={{width: "100%", height: "68%"}} src={Carson} alt="Carson"/>);
        case "Daniel": 
            return (<img style={{width: "100%", height: "68%"}} src={Daniel} alt="Daniel"/>);
        case "Jessie":
            return (<img style={{width: "100%", height: "68%"}} src={Jessie} alt="Jessie"/>);
        case  "Patrick":
            return (<img style={{width: "100%", height: "68%"}} src={Patrick} alt="Patrick"/>);
        default :
            return (
                <img style={{width: "100%", height: "68%"}} src={blank_profile} alt="no_picture"/>
                )
    }
}
export default Images;