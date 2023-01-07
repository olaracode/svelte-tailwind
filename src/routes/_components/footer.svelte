<script>
	let linkClass = 'underline underline-offset-8 hover:text-emerald-800';
</script>

<div
	class="z-50 shadow-md h-60 w-full text-white bg-emerald-400 h-14 flex items-center justify-center px-10 py-20 top-0"
>
	<div>
		<h2 class="font-bold text-lg text-center">
			Developed by
			<a href="https://github.com/olaracode/" class={linkClass}> Octavio Lara </a>
			using
			<a href="https://svelte.dev/" class={linkClass}>SvelteJs</a>
			+
			<a href="https://tailwindcss.com" class={linkClass}>Tailwind</a>
		</h2>
		<p class="text-center mt-3">
			Data from <a href="https://rickandmortyapi.com" class={linkClass}>Rick and morty API</a>
		</p>
	</div>
</div>
