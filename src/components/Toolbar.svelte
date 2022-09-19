<script lang="ts">
	import type { ToolbarButton } from 'src/library/types';
	export let buttons: ToolbarButton[];
	import type { MenuComponentDev } from '@smui/menu';
	import Menu from '@smui/menu';
	import { Anchor } from '@smui/menu-surface';
	import List, { Item, Text, PrimaryText, SecondaryText } from '@smui/list';
	import Button, { Label } from '@smui/button';
	import NameFileDialog from './NameFileDialog.svelte';

	let menu: MenuComponentDev;
	let anchor: HTMLDivElement;
	let anchorClasses: { [k: string]: boolean } = {};
</script>

<div id="toolbar">
	<div
		class={Object.keys(anchorClasses).join(' ')}
		use:Anchor={{
			addClass: (className) => {
				if (!anchorClasses[className]) {
					anchorClasses[className] = true;
				}
			},
			removeClass: (className) => {
				if (anchorClasses[className]) {
					delete anchorClasses[className];
					anchorClasses = anchorClasses;
				}
			}
		}}
		bind:this={anchor}
	>
		<Button on:click={() => (menu.isOpen() ? menu.setOpen(false) : menu.setOpen(true))}>
			<Label>File</Label>
		</Button>
		<Menu bind:this={menu} anchor={false} bind:anchorElement={anchor} anchorCorner="BOTTOM_LEFT">
			<List twoLine>
				{#each buttons as button}
					<Item on:SMUI:action={button.onClick}>
						<Text>
							<PrimaryText>{button.text}</PrimaryText>
							<SecondaryText>{button.secondaryText}</SecondaryText>
						</Text>
					</Item>
				{/each}
			</List>
		</Menu>
	</div>
</div>

<style>
	div#toolbar {
		display: flex;
		height: 50px;
		margin: 0 10px;
	}
</style>
