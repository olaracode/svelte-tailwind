<script>
	import '../app.css';
	import Navbar from './components/navbar.svelte';
</script>

<div>
	<Navbar />
	<div class="my-16 relative px-10 ">
		<slot />
	</div>
</div>
