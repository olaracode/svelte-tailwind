<script>
	/** @type {import('./$types').PageData} */
	import Buttonlink from '../../_components/button/buttonlink.svelte';
	export let data;
	$: character = data.character;
</script>

<a href="/" class="hover:text-emerald-200">Volver</a>
<div class="card mx-auto max-w-md lg:max-w-lg">
	<div>
		<img src={character.image} class="w-full rounded-md" alt={character.name} />
		<div class="flex mt-2 justify-between">
			<p>{character.name}</p>
			<div>
				{character.status} | {character.species}
			</div>
		</div>
	</div>
	<hr class="border-emerald-200 my-5" />
	<div class="flex justify-around items-center gap-5  ">
		{#if character.id !== 1}
			<Buttonlink href={`${character.id - 1}`} content={'previous'} />
		{:else}
			<Buttonlink disabled={true} content={'previous'} />
		{/if}
		{#if character.id !== 20}
			<Buttonlink href={`${character.id + 1}`} content={'next'} />
		{:else}
			<Buttonlink disabled={true} content={'next'} />
		{/if}
	</div>
</div>
