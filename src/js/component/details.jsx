import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const Details = () => {

    const {store, actions} = useContext(Context);
    
    const {uid} = useParams()

    useEffect(()=>{
        console.log(uid)
        actions.getOne(uid)
     
    }, [])

    const characterData = store.character;
    console.log("personajes", characterData)



    return (
        <>
        <div className="container">
        
                <div className="card p-4">
                <div className="d-flex">
                    <figure>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} alt="" />
                        <figcaption>
                            {characterData?.name}
                            
                        </figcaption>
                    </figure>
                    <div>
                        <p>Eye color: {characterData?.eye_color}</p>
                        <p>Hair color: {characterData?.hair_color}</p>
                        <p>Height: {characterData?.height}</p>
                        <p>Mass: {characterData?.mass}</p>
                        <p>Skin color: {characterData?.skin_color}</p>
                    </div>

        

                </div>
                </div>
            
            
        </div>
        </>
    )
}