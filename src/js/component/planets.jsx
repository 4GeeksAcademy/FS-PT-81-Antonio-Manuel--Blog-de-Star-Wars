import React from "react";
import { Link } from "react-router-dom"
import { Context } from "../store/appContext";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

export const CardPlanet = () => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {

        actions.getOnePlanet(params.uid)
    }, [params.uid])

    useEffect(() => {

        console.log(store.planet)
    }, [store.planet])

 
    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="card p-4">
                    <div className="d-flex">
                        <figcaption>
                            <h3>
                                {store.planet?.name}
                            </h3>
                        </figcaption>
                    </div>
                    <img className=" mb-4 aling-content-center imagen" src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} alt={store.planets?.properties?.name} />

                    <div>
                        <p>Diameter: {store.planet?.diameter}</p>
                        <p>Orbital Period: {store.planet?.orbital_period}</p>
                        <p>Gravity: {store.planet?.gravity}</p>
                        <p>Population: {store.planet?.population}</p>
                        <p>Climate: {store.planet?.climate}</p>
                        <p>Terrain: {store.planet?.terrain}</p>
                        <p>Surface Water: {store.planet?.surface_water}</p>

                    </div>

                    

                </div>
            </div>
        </>
    )
}


   

