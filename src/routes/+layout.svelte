<script>
	import '../app.css';
	import Navbar from './components/navbar.svelte';
</script>

<div>
	<Navbar />
	<div class="my-16 relative">
		<slot />
	</div>
</div>
