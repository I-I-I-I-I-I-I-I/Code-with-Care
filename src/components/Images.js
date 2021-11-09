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
            return (<img style={{width: "100%", height: "68%"}} src={Arnold}/>);
        case "Betty":
            return (<img style={{width: "100%", height: "68%"}} src={Betty}/>);
        case "Carson":
            return (<img style={{width: "100%", height: "68%"}} src={Carson}/>);
        case "Daniel": 
            return (<img style={{width: "100%", height: "68%"}} src={Daniel}/>);
        case "Jessie":
            return (<img style={{width: "100%", height: "68%"}} src={Jessie}/>);
        case  "Patrick":
            return (<img style={{width: "100%", height: "68%"}} src={Patrick}/>);
        default :
            return (
                <img style={{width: "100%", height: "68%"}} src={blank_profile}/>
                )
    }

}

export default Images;