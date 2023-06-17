import React from "react";

const Card = ({ pokemon, loading }) => {
    console.log(pokemon);
    return (
        <>
            {
                loading ? <h1>Please wait while we load</h1> :
                    pokemon.map((item) => {
                        return (
                            <>
                                <div className="card">
                                    <h2>1</h2>
                                    <img src="./images/charmander.png" alt="" />
                                    <h2>Charmander</h2>
                                </div>
                            </>
                        )
                    })
            }
        </>
    );
}

export default Card;