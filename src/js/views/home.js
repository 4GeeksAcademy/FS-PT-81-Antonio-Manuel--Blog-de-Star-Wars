import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Context } from "../store/appContext.js"


export const Home = () => {

const {store, actions} = useContext(Context)

	return (
	<div className="text-center mt-5">
	
	<section>
		<h2>People</h2>
		<div className="row">
		{
			store.people?.map(el=> <Card key={el.uid} name={el.name} uid={el.uid} img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`} />)
		}
		</div>
	</section>
	</div>

)
};
