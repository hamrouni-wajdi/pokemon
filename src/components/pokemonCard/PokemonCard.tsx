import React, { useState,useEffect } from "react";
import axios from "axios";

export type pokemon = {
    name:String,
    url:String,
    order:Number,
}


export function PokemonCard ({name,url,order}:pokemon){
const [showDetails,setShowDetails] = useState(false)
const [pokeDetails, setpokeDetails] = useState()
    
        const fetchDetails = async () => {
          const result = await axios(
            `https://pokeapi.co/api/v2/pokemon/${order}`,
          );
    
          setpokeDetails(result.data);
          console.log(pokeDetails)
          setShowDetails(true)
        };
  
    return(
    <div className="cardContainer">
        <h1>name:{name} </h1>
        <a>{url}</a>
        <button onClick={fetchDetails}> Explore details</button>
        {showDetails && (
        <div className="details">
           <h3>Height</h3>
           <p>{pokeDetails && pokeDetails['height']}
           </p>
           <h3>Weight</h3>
           <p>{pokeDetails && pokeDetails['weight']}</p> 
        </div>)
        }
        
    </div>
    )
}