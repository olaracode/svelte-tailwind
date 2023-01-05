<script>
	import '../app.css';
	import Navbar from './_components/navbar.svelte';
	import Footer from './_components/footer.svelte';
</script>

<div>
	<Navbar />
	<div class="my-16 relative px-10 min-h-[85vh]">
		<slot />
	</div>
	<Footer />
</div>
