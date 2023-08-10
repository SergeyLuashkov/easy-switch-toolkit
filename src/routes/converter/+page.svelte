<script lang="ts">
	import { convert } from '$lib/converter';
	let target = '';
	let template = '';
	let output = '';
	let result = '';

	const onClick = async () => {
		result = convert(target, template, output);
	};
</script>

<div class="converter">
	<div class="column">
		<div class="item">
			<p>Target:</p>
			<textarea bind:value={target} />
		</div>
		<div class="item">
			<p>Result:</p>
			<textarea bind:value={result} />
		</div>
	</div>
	<div class="column">
		<div class="item">
			<p>Template:</p>
			<textarea bind:value={template} />
		</div>
		<div class="item">
			<p>Output</p>
			<textarea bind:value={output} />
		</div>
	</div>
</div>
<button on:click={onClick}>Convert</button>

<style>
	.converter {
		display: flex;
		height: 100vh;
	}
	.column {
		display: flex;
		flex-direction: column;
		width: 50%;
		flex-basis: 100%;
	}
	.item {
		display: flex;
		flex-direction: column;
		padding: 5px;
		height: 100%;
	}
	textarea {
		resize: none;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}
</style>
