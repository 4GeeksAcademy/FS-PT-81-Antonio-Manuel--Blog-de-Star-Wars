import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext, useEffect } from "react";



export const Card = (props) => {

    const { store, actions } = useContext(Context);

    const handleFavorite=()=>{
        const fav = {...props}
        actions.addFav(fav)
    }

    const handleDelete=()=>{
        const del = {...props}
        actions.addDelete(del)
    }


    return (
    <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="card">
            <figure>
                <img className="card-image-top" src={props.img} alt={props.name} />
                <figcaption>{props.name}</figcaption>
            </figure>
            <div className="d-flex justify-content-around">
                <Link to={`/${props.type}/` + props.uid}>
                <button className="btn btn-primary">Learn More</button>
                </Link>
                <button className="btn btn-outline-warning me-3" onClick={handleFavorite}>
                    <i className="fa-solid fa-heart"></i>
                </button>
                <button className="btn btn-outline-warning me-3" onClick={handleDelete}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    </div>
    )
}