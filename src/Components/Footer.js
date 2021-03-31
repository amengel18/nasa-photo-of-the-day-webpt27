import React from "react"

export default function Footer (props){
    const { nasaData } = props

    return(
        <div> 
            <p>{nasaData.copyright}</p>
        </div>
    )
}