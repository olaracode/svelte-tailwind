import { characters, getCharacters } from '../../store/character';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	let characterList;
	const handleCharacters = async () => {
		characters.subscribe((value) => {
			characterList = value;
		});
		if (characterList.length < 1) {
			const response = await getCharacters(fetch);
			return await response.find((character) => character.id == params.slug);
		} else {
			return characterList.find((character) => character.id == params.slug);
		}
	};
	return {
		character: await handleCharacters()
	};
}
