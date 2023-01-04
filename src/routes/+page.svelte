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
			<div class="mt-2">
				<p>{name}</p>
				<div class="mt-2">
					<a
						class="px-5 py-2 rounded-md bg-emerald-200 hover:bg-emerald-400"
						href={`/character/${id}`}>Details</a
					>
				</div>
			</div>
		</div>
	{:else}
		<p>loading...</p>
	{/each}
</div>
