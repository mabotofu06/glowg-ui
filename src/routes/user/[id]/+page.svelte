<div class="flex flex-col w-full text-2xl">
  <div class="relative">
    <div class="bg-lime-100 w-full h-80"></div>
    <div class="bg-lime-200 w-50 h-50 rounded-full absolute translate-x-2 -bottom-30 border-4 border-white"></div>
  </div>

  <div class="flex ms-55 mt-5 justify-between items-center">
    <div class="flex flex-col">
      <span class="text-5xl text-gray-600 mb-3">テストユーザー</span>
      <span class="text-2xl text-lime-600">{userId}</span>
    </div>
    <button class="bg-lime-500 text-white rounded-full px-4 py-2 me15">+フォロー</button>
  </div>

  <div class="mt-8 mx-20">
    説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
    説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
    説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
    説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文
  </div>

  <div class="mt-10 mx-20">
    <div class="flex border-b border-gray-300 mb-4">
      <button
        class="px-6 py-2 focus:outline-none"
        class:selected={activeTab === 'posts'}
        on:click={() => activeTab = 'posts'}
      >
        すべての投稿
      </button>
      <button
        class="px-6 py-2 focus:outline-none"
        class:selected={activeTab === 'likes'}
        on:click={() => activeTab = 'likes'}
      >
        作業中のログ
      </button>
      <button
        class="px-6 py-2 focus:outline-none"
        class:selected={activeTab === 'likes'}
        on:click={() => activeTab = 'likes'}
      >
        作業終了したログ
      </button>
      <button
        class="px-6 py-2 focus:outline-none"
        class:selected={activeTab === 'likes'}
        on:click={() => activeTab = 'likes'}
      >
        フォロー中の作業ログ
      </button>
    </div>
    {#if activeTab === 'posts'}
      <div>
        投稿タブの内容
      </div>
    {:else if activeTab === 'likes'}
      <div>
        いいねタブの内容
      </div>
    {/if}
  </div>


</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
 
  let selectedDate = new Date();
  let userId: string;
  let activeTab: 'posts' | 'likes' = 'posts';

  $: userId = $page.params.id;

</script>