import React from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";
import { useState, useEffect } from "react";

export default function ListOfGifs ({params}) {

    console.log(params)
    const {keyword} = params;
    // HOOKS
    const [gifs, setGif] = useState([]) //Efecto de eatado

    useEffect(function() { //Efecto con renderizado
      getGifs({keyword})
      .then(gifs => setGif(gifs))
    }, [keyword])

    return <>
        {
            gifs.map(singleGif => 
                <Gif 
                    key={singleGif.id}
                    title={singleGif.title} 
                    url={singleGif.url} 
                    id={singleGif.id}
                />  
            )
        }
    </>
                  
}