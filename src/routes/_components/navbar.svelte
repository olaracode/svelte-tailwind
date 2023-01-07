<script>
	import { favorites } from '../store/favorites';

	let favoritesList;
	favorites.subscribe((value) => {
		favoritesList = value;
	});

	let isShown = false;
	const handleOpen = () => {
		isShown = true;
	};
	const handleClose = () => {
		isShown = false;
	};
	const removeFavorite = (character) => {
		let filteredList = favoritesList.filter((item) => item !== character);
		favorites.update((prev) => filteredList);
	};
</script>

<div
	class="z-50 shadow-md h-50 w-full text-white bg-emerald-400 h-14 flex items-center px-10 py-5 fixed top-0 justify-between"
>
	<div>
		<a class="font-bold text-lg" href="/">Rick and morty</a>
	</div>
	<div class="flex items-center w-fit-content">
		<button class="btn border border-emerald-100" on:click={handleOpen}>
			<i class="fas fa-heart" />
			{favoritesList.length}
		</button>
	</div>
	{#if isShown}
		<div
			class="z-50 absolute right-0 mx-10 top-16 text-black border border-emerald-200 rounded-md bg-emerald-100 grid grid-cols-1 divide-y"
		>
			{#each favoritesList as favorite}
				<div class="p-2 cursor-pointer flex items-center gap-2 justify-between">
					<a href={`/character/${favorite.id}`}>{favorite.name}</a>
					<i class="fas fa-trash-alt hover:text-red-500" on:mousedown={removeFavorite(favorite)} />
				</div>
			{/each}
		</div>
		<div class="z-0 absolute top-0 left-0 h-screen w-screen" on:mousedown={handleClose} />
	{/if}
</div>
