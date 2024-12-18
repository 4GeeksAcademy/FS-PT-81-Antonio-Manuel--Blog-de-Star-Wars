const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			people: [],
			character: [],
			planets: [],
			planet: {},
			vehicles: [],
			vehicle: {},
			favorito: [],
			delete: []
		},
		actions: {
			getPeople: async () => {
				try {
					const resp = await fetch(getStore().url + '/people')
					if(!resp.ok) throw new Error ('error de personas')
					const data = await resp.json ()
					console.log(data)
					console.log(data.results)
					setStore({people: data.results})
				} catch (error) {
					console.error(error);
				}
			},
			getOne: async (uid) => {
				try {
					const resp = await fetch(getStore().url + '/people/' + uid)
					if(!resp.ok) throw new Error ('error de personas')
					const data = await resp.json ()
					console.log(data)
					console.log('mi personaje', data)
					setStore({character: data.result.properties})
				} catch (error) {
					console.error(error);
				}
			},
			getPlanets: async () => {
				try {
					const resp = await fetch(getStore().url + '/planets')
					if(!resp.ok) throw new Error ('error de planetas')
					const data = await resp.json ()
					console.log(data)
					console.log(data.results)
					setStore({planets: data.results})
				} catch (error) {
					console.error(error);
				}
			},
			getOnePlanet: async (uid) => {
				try {
					const resp = await fetch(getStore().url + '/planets/' + uid)
					if(!resp.ok) throw new Error ('error de planetas')
					const data = await resp.json ()
					console.log(data)
					console.log('mi planeta', data)
					setStore({planet: data.result.properties})
				} catch (error) {
					console.error(error);
				}
			},
			getVehicles: async () => {
				try {
					const resp = await fetch(getStore().url + '/vehicles')
					if(!resp.ok) throw new Error ('error de planetas')
					const data = await resp.json ()
					console.log(data)
					console.log(data.results)
					setStore({vehicles: data.results})
				} catch (error) {
					console.error(error);
				}	
			},	

			getOneVehicle: async (uid) => {
				try {
					const resp = await fetch(getStore().url + '/vehicles/' + uid)
					if(!resp.ok) throw new Error ('error de planetas')
					const data = await resp.json ()
					console.log(data)
					console.log('mi planeta', data)
					setStore({vehicle: data.result.properties})
				} catch (error) {
					console.error(error);
				}
			},	

			addFav: (fav)=>{
				const store = getStore();
				const isFavorito = store.favorito.some(elem=>elem.uid ===fav.uid && elem.name === fav.name)
				if(isFavorito){
					setStore({
						favorito:store.favorito.filter(elem=>!(elem.uid ===fav.uid && elem.name === fav.name))
					})
				}else{
					setStore({favorito: [...store.favorito, fav]})

				}
			},

			addDelete: (del)=>{
				const store = getStore();
				const isDelete = store.delete.some(elem=>elem.uid ===del.uid && elem.name === del.name)
				if(isDelete){
					setStore({
						delete:store.delete.filter(elem=>!(elem.uid ===del.uid && elem.name === del.name))
					})
				}else{
					setStore({delete: [...store.delete, del]})
					if(del.type === "planets"){
						setStore({
							planets: store.planets.filter(elem=>!(elem.uid ===del.uid && elem.name === del.name))
						})
					}
					else if (del.type === "characters") {
						setStore({
							people: store.people.filter(elem=>!(elem.uid ===del.uid && elem.name === del.name))
						})
					}  
					else {
						setStore({
							vehicles: store.vehicles.filter(elem=>!(elem.uid ===del.uid && elem.name === del.name))
						})
					}
				}
			},
		}
	};
};

export default getState;
