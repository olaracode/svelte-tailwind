<script>
	import { characters } from './store/character';
	import { onMount } from 'svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	onMount(async () => {
		await characters.set(data.characters);
	});
</script>

<div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
	{#each $characters as { name, image, id }}
		<div class="card">
			<img src={image} alt="" class="rounded-lg w-full" />
			<p>{name}</p>
			<a href={`/character/${id}`}>route</a>
		</div>
	{:else}
		<p>loading...</p>
	{/each}
</div>
