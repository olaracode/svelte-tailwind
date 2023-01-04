<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const character = data.character;
</script>

<a href="/" class="hover:text-emerald-200">Volver</a>
<div class="card mx-auto max-w-md lg:max-w-lg">
	<div>
		<img src={character.image} class="w-full rounded-md" alt={character.name} />
		<p>{character.name}</p>
	</div>
</div>
<!-- <div class="flex justify-center gap-5 mt-5">
	{#if character.id !== 1}
		<a href={`/character/${character.id - 1}`}>previous</a>
	{:else}
		<p class="text-slate-700">previous</p>
	{/if}
	{#if character.id !== 20}
		<a href={`/character/${character.id + 1}`}>next</a>
	{:else}
		<p class="text-slate-700">next</p>
	{/if}
</div> -->
