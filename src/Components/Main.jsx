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
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();

    const pokeDocs = async() => {
        setLoading(true)
        const res = await axios.get(url);
        //console.log(res.data.results)
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false)
        //console.log(pokeData)
    }

    const getPokemon = async (res) => {
        res.map(async(item) => {
           // console.log(item.url)
           const result = await axios.get(item.url)
           //console.log(result.data)
           setPokeData(state => {
            state=[...state, result.data]
            return state;
           })
        })
    }

    useEffect(()=>{
        pokeDocs();
    },[url])

    return(
        <>
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading}/>

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