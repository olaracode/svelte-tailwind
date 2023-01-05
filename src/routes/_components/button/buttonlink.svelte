<script>
	// We provide default values to avoid console warnings
	export let href = '/';
	export let content;
	export let disabled = false;
</script>

{#if disabled}
	<p class="px-5 py-2 rounded-md bg-emerald-50">{content}</p>
{:else}
	<a class="btn-primary" {href}>{content}</a>
{/if}
