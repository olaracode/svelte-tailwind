<script>
	import { characters as storeCharacters } from './store/character';
	import { onMount } from 'svelte';
	/** @type {import('./$types').PageData} */
	export let data;

	let characters;

	storeCharacters.subscribe((value) => {
		characters = value;
	});
	onMount(async () => {
		await storeCharacters.set(data.characters);
	});
</script>

<div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
	{#each $storeCharacters as { name, image }}
		<div class="card">
			<img src={image} alt="" class="rounded-lg w-full" />
			<p>{name}</p>
			<a href="/character">route</a>
		</div>
	{:else}
		<p>loading...</p>
	{/each}
</div>
<h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
