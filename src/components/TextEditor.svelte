<script lang="ts">
	export let rawText: string;
	export let editorEl;
	const updateState = (e: Event) => {
		rawText = (e.target as HTMLTextAreaElement).value;
	};
</script>

<textarea id="markdownEditor" value={rawText} bind:this={editorEl} on:input={updateState} />

<style>
	textarea#markdownEditor {
		width: 50%;
		height: calc(100vh - 100px);
		padding: 25px;
		resize: none;
		border: none;
		background-color: transparent;
		outline: none;
	}
</style>
