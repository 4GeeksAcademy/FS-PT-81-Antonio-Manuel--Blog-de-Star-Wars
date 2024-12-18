import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Context } from "../store/appContext.js"
import { CardPlanet } from "../component/planets.jsx";
import { CardVehicles } from "../component/vehicles.jsx";


export const Home = () => {

const {store, actions} = useContext(Context)

	return (
	<div className="text-center mt-5">
	
	<section>
		<h2>Characters</h2>
		<div className="row">
		{
			store.people?.map(el=> <Card key={el.uid} name={el.name} uid={el.uid} type="characters" img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`} />)
		}
		</div>
		<h2>Planets</h2>
		<div className="row">
		{
			store.planets?.map(el=> <Card key={el.uid} name={el.name} uid={el.uid} type="planets" img={`https://starwars-visualguide.com/assets/img/planets/${el.uid}.jpg`} />)
		}
		</div>
		<h2>Vehicles</h2>
		<div className="row">
		{
			store.vehicles?.map(el=> <Card key={el.uid} name={el.name} uid={el.uid} type="vehicles" img={`https://starwars-visualguide.com/assets/img/vehicles/${el.uid}.jpg`} />)
		}

		</div>
	</section>
	</div>

)
};
