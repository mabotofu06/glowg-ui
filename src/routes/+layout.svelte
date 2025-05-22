<header class="bg-white text-lime-700 text-4xl p-4 border-b-2 border-lime-700">

	<h1>
	<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		<path d="M12 2L2 7l10 5 10-5L12 2z"></path>
		<path d="M2 17l10 5 10-5V7L12 12 2 7v10z"></path>
	</svg>
	Glowg
	</h1>
</header>

<main class="flex h-full p-4">
	<div class="flex flex-col border-r-2 border-lime-700 pr-4 ">
		<div class="w-18 h-18 bg-lime-300 rounded-full mb-5"></div>
		<div class="w-18 h-18 bg-lime-300 rounded-full mb-5"></div>
		<div class="w-18 h-18 bg-lime-300 rounded-full mb-5"></div>
		<div class="w-18 h-18 bg-lime-300 rounded-full mb-5"></div>
	</div>
	<div class="timeline w-full">
		{@render children()}
	</div>
</main>

<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<style>
</style>