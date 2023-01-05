<script>
	export let href;
	export let content;
	export let disabled;
</script>

{#if disabled}
	<p class="px-5 py-2 rounded-md bg-emerald-50">{content}</p>
{:else}
	<a class="px-5 py-2 rounded-md bg-emerald-200 hover:bg-emerald-400" {href}>{content}</a>
{/if}
