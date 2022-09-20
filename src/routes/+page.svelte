<script lang="ts">
	import TextEditor from '../components/TextEditor.svelte';
	import DisplayMarkdown from '../components/DisplayMarkdown.svelte';
	import Toolbar from '../components/Toolbar.svelte';
	let rawText: string = DEFAULT_TEXT;
	import type { ToolbarButton } from '../library/types';
	import { downloadMarkdownFile, uploadFilehandler } from '../shared/utils';
	import NameFileDialog from '../components/NameFileDialog.svelte';
	import { DEFAULT_TEXT } from '../shared/constants';
	let open: boolean = false;
	let complete: boolean = false;
	let fileName: string;
	let editorEl: HTMLTextAreaElement;
	let displayEl: HTMLDivElement;
	let instantiated: boolean = false;

	$: if (complete && fileName) {
		downloadMarkdownFile(rawText, fileName);
		complete = false;
		fileName = '';
		open = false;
	}

	$: if (editorEl && displayEl && !instantiated) {
		instantiated = true;
		editorEl.addEventListener('scroll', (e) => {
			(displayEl as HTMLDivElement).scrollTop = (e.target as HTMLTextAreaElement).scrollTop;
		});
	}

	const buttons: ToolbarButton[] = [
		{
			text: 'Import',
			secondaryText: 'Upload an existing markdown file',
			value: 'upload',
			onClick: async (e: Event) => {
				try {
					const text = await uploadFilehandler();
					rawText = text;
				} catch (error) {
					alert(error);
				}
			},
			icon: 'upload'
		},
		{
			text: 'Save As',
			secondaryText: 'Save file to your computer',
			value: 'download',
			onClick: async (e: Event) => {
				open = true;
			},
			icon: 'download'
		}
		// {
		// 	text: 'Print',
		// 	secondaryText: 'Prepare file for printing',
		// 	value: 'print',
		// 	onClick: async (e: Event) => {
		// 		window.print();
		// 	},
		// 	icon: 'download'
		// }
	];
</script>

<div id="toolbarPanel">
	<Toolbar {buttons} />
</div>
<div id="applicationPanel">
	<TextEditor bind:rawText bind:editorEl />
	<DisplayMarkdown {rawText} bind:displayEl />
	<NameFileDialog bind:open bind:complete bind:fileName />
</div>

<style>
	div#applicationPanel {
		display: flex;
		flex-grow: 1;
	}
	div#toolbarPanel {
		height: 5vh;
	}
</style>
