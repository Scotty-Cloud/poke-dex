import React from "react";
import Card from "./Card";
import PokeInfo from "./PokeInfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const Main = () => {

    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

    const pokeDocs = async() => {
        setLoading(true)
        const res=await axios.get(url);
        console.log(res)
    }
    useEffect(()=>{
        pokeDocs();
    },[url])

    return(
        <>
            <div className="container">
                <div className="left-content">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <div className="btn-group">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                </div>
                <div className="right-container">
                    <PokeInfo />
                </div>
            </div>
        </>
    )
}

export default Main