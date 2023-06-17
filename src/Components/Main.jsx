import React from "react";
import Card from "./Card";
import PokeInfo from "./PokeInfo";

const Main = () => {
    return(
        <>
            <div className="container">
                <div className="left-content">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="right-container">
                    <PokeInfo />
                </div>
            </div>
        </>
    )
}

export default Main