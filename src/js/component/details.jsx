import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const Details = (props) => {

    const [store, actions] = useContext(Context);
    const [characterData, setCharacterData] = useState(null)
    const {uid} = useParams()

    useEffect(()=>{
        actions.getOne(uid).then((data) => {
            console.log('datos personaje', data)
            setCharacterData(data)
        })
    }, [])

    return (
        <>
        <div className="container">
            {characterData && (
                <div className="card">
                <div className="d-flex">
                    <figure>
                        <img src="" alt="" />
                        <figcaption>
                            {/* {characterData.properties?.name} */}
                            <h1>Personajes</h1>
                        </figcaption>
                    </figure>
                    {/* <div>
                        <p>eye color: {characterData?.properties?.eye_color}</p>
                        <p>hair color: {characterData?.properties?.hair_color}</p>
                        <p>height: {characterData?.properties?.height}</p>
                        <p>mass: {characterData?.properties?.mass}</p>
                        <p>skin color: {characterData?.properties?.skin_color}</p>
                    </div> */}
                </div>
                </div>
            )}
            
        </div>
        </>
    )
}