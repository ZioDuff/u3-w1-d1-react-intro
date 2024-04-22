import React from "react";


function CreateButton(props){
console.log(props)
    return(
        <>
        <button className={props.className} >{props.buttonText}</button>
        </>
    )
}

export default CreateButton