const apiRoute = 'https://rickandmortyapi.com/api/character';

const getCharacters = async () => {
	const response = await fetch(apiRoute);
	const data = await response.json();
	return data.results;
};

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		characters: await getCharacters()
	};
}
