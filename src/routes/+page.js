import { characters } from './store/character';
const apiRoute = 'https://rickandmortyapi.com/api/character';

const getCharacters = async (fetch) => {
	const response = await fetch(apiRoute);
	const data = await response.json();
	return data.results;
};

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	return {
		characters: await getCharacters(fetch)
	};
}
