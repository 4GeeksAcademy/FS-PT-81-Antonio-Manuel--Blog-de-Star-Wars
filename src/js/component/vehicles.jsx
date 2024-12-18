import React from "react";
import { Context } from "../store/appContext";
import { useContext, useEffect } from "react";
import { useParams } from "react-router";

export const CardVehicles = () => {


 const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {

        actions.getOneVehicle(params.uid)
    }, [params.uid])


    return (
        <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="card p-4">
                    <div className="d-flex">
                        <figcaption>
                            <h3>
                                {store.vehicles?.properties?.name}
                            </h3>
                        </figcaption>
                    </div>
                    <img className=" mb-4 aling-content-center imagen" src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`} alt={store.vehicle?.name} />

                    <div>
                        <p>Cargo capacity: {store.vehicle?.cargo_capacity}</p>
                        <p>Consumables: {store.vehicle?.consumables}</p>
                        <p>Cost in credits: {store.vehicle?.cost_in_credits}</p>
                        <p>Created: {store.vehicle?.created}</p>
                        <p>Crew: {store.vehicle?.crew}</p>
                        <p>Model: {store.vehicle?.model}</p>
                        <p>Passengers: {store.vehicle?.passengers}</p>

                    </div>

                  

                </div>
            </div>
        </>
    )
}
