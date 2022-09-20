<script lang="ts">
	import type { ToolbarButton } from 'src/library/types';
	import type { MenuComponentDev } from '@smui/menu';
	import Menu from '@smui/menu';
	import List, { Item, Text, PrimaryText, SecondaryText } from '@smui/list';
	import Button, { Label } from '@smui/button';

	export let buttons: ToolbarButton[];
	let menu: MenuComponentDev;
	let anchor: HTMLDivElement;
</script>

<div id="toolbar">
	<div bind:this={anchor}>
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
