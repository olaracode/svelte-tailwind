<script>
	import Buttonlink from '../button/buttonlink.svelte';
	import { favorites } from '../../store/favorites';

	let defaultImage = '/images/portal.png';
	export let character = {
		image: defaultImage,
		name: 'M.I.A',
		id: 1
	};
	let spin = character.image === defaultImage;

	const addFavorite = (character) => {
		if ($favorites.includes(character)) return;
		favorites.update((favorites) => [...favorites, character]);
	};
</script>

<div class="card">
	<img src={character.image} alt="" class={`rounded-lg w-full`} />
	<div class={`mt-2 ${spin && 'text-center'}`}>
		<p>{character.name}</p>
		<div class="mt-2 flex justify-between items-center">
			<Buttonlink href={`/character/${character.id}`} content={'Details'} />
			<button class="btn-warning" on:click={addFavorite(character)}>
				<i class="fas fa-heart" />
			</button>
		</div>
	</div>
</div>
