import { writable } from 'svelte/store';

const apiRoute = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async (fetch) => {
	const response = await fetch(apiRoute);
	const data = await response.json();
	return data.results;
};

export const characters = writable([]);
