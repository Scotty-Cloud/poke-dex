import React from "react";

const Card = ({ pokemon, loading, pokeDexInfo }) => {
    console.log(pokemon);
    return (
        <>
            {
                loading ? <h1>Please wait while we load</h1> :
                pokemon.map((item) => {
                        return (
                            <>
                                <div className="card" 
                                    key={item.id} onClick={()=> pokeDexInfo(item)}>
                                    <h2>{item.id}</h2>
                                    <img src={item.sprites.front_default} alt="" />
                                    <h2>{item.name}</h2>
                                </div>
                            </>
                        )
                    })
            }
        </>
    );
}

export default Card;