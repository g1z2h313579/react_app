import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const back = (props)=>{

    function goback(){
        props.history.go(-1)
        
    }


    return (
        <FontAwesomeIcon icon={faAngleLeft} transform="shrink--10" onClick={goback} />
    )
}

export default back;