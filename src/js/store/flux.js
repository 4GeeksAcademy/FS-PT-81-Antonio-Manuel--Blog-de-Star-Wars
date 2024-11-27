const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			people: [],
			character: []
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
					const resp = await fetch(getStore().url + '/people' + uid)
					if(!resp.ok) throw new Error ('error de personas')
					const data = await resp.json ()
					console.log(data)
					console.log('mi personaje', data.properties)
					setStore({character: data.properties})
				} catch (error) {
					console.error(error);
				}
			}
			
		}
	};
};

export default getState;
