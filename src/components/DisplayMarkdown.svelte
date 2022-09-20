<script lang="ts">
	export let rawText: string;
	export let displayEl;
	import { marked as m } from 'marked';
</script>

<div id="displayMarkdownPanel" bind:this={displayEl}>
	{@html m(rawText)}
</div>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
	}

	div#displayMarkdownPanel {
		width: 50%;
		border-left: 1px solid gray;
		height: calc(100vh - 100px);
		padding: 25px;
		overflow-y: scroll;
		font-family: Arial, Helvetica, sans-serif;
	}
</style>
