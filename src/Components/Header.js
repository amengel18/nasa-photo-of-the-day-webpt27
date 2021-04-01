import React from "react";

export default function Header (props) {
    const { nasaData } = props

    return (
        <div>
            <h1>Nasa Photo of the Day</h1>
            <p>{nasaData.date}</p>
            <p>{nasaData.title}</p>
        </div>
    )
}