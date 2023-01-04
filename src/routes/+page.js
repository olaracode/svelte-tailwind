import { getCharacters } from './store/character';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	return {
		characters: await getCharacters(fetch)
	};
}
