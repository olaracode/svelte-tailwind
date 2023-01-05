<script>
	import { characters } from './store/character';
	import { onMount } from 'svelte';
	import Buttonlink from './components/button/buttonlink.svelte';
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
			<div class="mt-2">
				<p>{name}</p>
				<div class="mt-2">
					<Buttonlink href={`/character/${id}`} content={'Details'} />
				</div>
			</div>
		</div>
	{:else}
		<p>loading...</p>
	{/each}
</div>
