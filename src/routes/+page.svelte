<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="easy-switch-toolkit" />
</svelte:head>

<section>
	<a href="{base}/converter">Converter</a>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
