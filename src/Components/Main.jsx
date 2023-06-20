import React from "react";
import Card from "./Card";
import PokeInfo from "./PokeInfo";
import axios from "axios";
import { useState, useEffect } from "react";

const Main = () => {

    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeDocs = async() => {
        setLoading(true)
        const res = await axios.get(url);

        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false)
 
    }

    const getPokemon = async (res) => {
        res.map(async(item) => {
           const result = await axios.get(item.url)
           setPokeData(state => {
            state=[...state, result.data]
            state.sort((a,b) => a.id > b.id?1:-1)
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
                <div className="poke-list">
                    <Card pokemon={pokeData} loading={loading}
                        pokeDexInfo={poke => setPokeDex(poke) }
                    />
                    <div className="btn-group">
                    {  prevUrl && <button onClick={()=>{
                            setPokeData([])
                           setUrl(prevUrl) 
                        }}>Previous</button>}

                        { nextUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}
                    </div>
                </div>
                <div className="poke-display">
                    <PokeInfo data={pokeDex} />
                </div>
            </div>
        </>
    )
}

export default Main