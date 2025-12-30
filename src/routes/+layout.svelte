<script lang="ts">
	import './layout.css'
	import favicon from '$lib/assets/images/favicon.svg'

	let { children } = $props()
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

<style>
	@font-face {
		font-family: 'OverusedGrotesk-Light';
		src: url('$lib/assets/fonts/OverusedGrotesk-Light.woff2')
			format('woff2');
		font-weight: normal;
		font-style: normal;
	}

	:global(html) {
		scrollbar-color: #407bff white;
		scrollbar-width: thin;
	}
</style>
