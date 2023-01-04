<script>
	/** @type {import('./$types').PageData} */
	export let data;
	let characters = data.characters;
</script>

<ul>
	{#each characters as { name, image }}
		<li>
			<p>{name}</p>
		</li>
	{/each}
</ul>
<h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
