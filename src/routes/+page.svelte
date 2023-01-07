<script>
	import { characters } from './store/character';
	import LandingCard from './_components/character/landingCard.svelte';
	import Loader from './_components/loader.svelte';
	import { onMount } from 'svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	onMount(async () => {
		await characters.set(data.characters);
	});
</script>

<div class="landing-grid">
	{#each $characters as character}
		<LandingCard {character} />
	{:else}
		<Loader />
	{/each}
</div>
