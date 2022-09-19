<script lang="ts">
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	import Button, { Label } from '@smui/button';
	import FormField from '@smui/form-field';
	import Textfield from '@smui/textfield';
	export let open: boolean;
	export let complete: boolean;
	export let fileName: string = '';

	const handleClose = (e: Event) => {
		open = false;
		complete = false;
		fileName = '';
	};

	const handleSubmit = (e: Event) => {
		open = false;
		complete = true;
	};
</script>

<Dialog
	bind:open
	aria-labelledby="slider-title"
	aria-describedby="slider-content"
	on:SMUIDialog:closed={handleClose}
>
	<Title id="slider-title">Export File</Title>
	<Content id="slider-content">
		<div>
			<FormField style="display: flex; flex-direction: column-reverse;">
				<Textfield bind:value={fileName} />
				<span slot="label">File Name</span>
			</FormField>
		</div>
	</Content>
	<Actions>
		<Button action="accept" on:click={handleSubmit}>
			<Label>Done</Label>
		</Button>
	</Actions>
</Dialog>
