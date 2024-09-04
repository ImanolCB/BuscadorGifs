import React from "react";
import './Gif.css'

export default function Gif({title, url, id}){

    return(
        <a href={`#${id}`}  className="Gif">
            <h4>{title}</h4>
            <img src={url} id={id} />
        </a>

    )
}
