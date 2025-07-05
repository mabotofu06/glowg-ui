<div class="h-screen flex flex-col">
<header class="bg-white text-lime-700 text-3xl p-4 border-b border-lime-700">
	<h1>
		<span style="font-family: 'Segoe Print', cursive; font-weight: bold; letter-spacing: 0.03em;">glowG</span>
	</h1>
</header>

<main class="flex flex-1 h-0">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="flex flex-col border-r-2 border-lime-200 px-5 pt-5 bg-lime-50">

		{#each MENU_LIST as menu}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore event_directive_deprecated -->
		<button
			class="flex items-center w-18 h-18 bg-lime-300 rounded-full mb-5 text-green-700 group relative cursor-pointer z-20 hover:bg-lime-200 hover:text-lime-300 transition"
			on:click={() => onMenuClick(menu.path)}
		>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 mx-auto">
				<path stroke-linecap="round" stroke-linejoin="round" d={menu.path_d} />
			</svg>
			<span class="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 bg-lime-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-30 transition-opacity duration-200">
				{menu.label}
			</span>
		</button>
		{/each}

	</div>

	<div class="timeline w-full overflow-y-scroll p-8">
		{@render children()}
	</div>

	<!-- 投稿ボタン（右下固定） -->
	<!-- svelte-ignore event_directive_deprecated -->
	{#if typeof window !== 'undefined' && !/^\/post/.test(window.location.pathname)}
	<button
		class="fixed bottom-8 right-8 bg-lime-500 hover:bg-lime-600 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl z-5"
		aria-label="投稿"
		on:click={() => {$openPostModal = true}}
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
		</svg>
	</button>
	{/if}
</main>
</div>

{#if !$isLogin}
	<div class="overlay">
		<LoginModal />
	</div>
{/if}
{#if $openPostModal}
	<div class="overlay">
		<PostModal/>
	</div>
{/if}
{#if $isLoading}
	<div class="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
		<div class="animate-spin rounded-full h-16 w-16 border-t-4 border-lime-600 border-opacity-60"></div>
	</div>
{/if}

<script lang="ts">
	import { isLoading, openPostModal } from '$lib/stores/state';
  import LoginModal from '$lib/components/organisms/LoginModal.svelte';
  import { isLogin } from '$lib/stores/state';
	import '../app.css';
  import { onMount } from 'svelte';
  import PostModal from '$lib/components/organisms/PostModal.svelte';
	
	let { children } = $props();

	const onMenuClick = (path: string) => {
		window.location.href = path
	};

	const isTop = ()=>{
		if(!window) return false;
		return window.location.pathname === '/';
	}

	const MENU_LIST = [
		{label: 'Home'          , path: '/'               , path_d: 'm2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'},
		{label: 'Bookmark'      , path: ''                , path_d: 'M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z'   },
		{label: 'おしらせ'       , path: '/info'           , path_d: 'M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'},
		{label: 'アカウント'     , path: '/user/@test_user', path_d: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'},
		{label: '作業中の投稿'   , path: '/my_works'       , path_d: 'M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z'},
	]

	onMount(()=>{
		isLoading.set(false);
	})
</script>

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 10;
	}
</style>