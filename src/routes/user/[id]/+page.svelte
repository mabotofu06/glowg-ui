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
    <div class="flex border-b border-gray-300 mb-10">
      {#each MENU_LIST as menu}
        <button
          class={"px-6 py-2 focus:outline-none" + (activeTab === menu.code ? '  text-lime-500 border-b-2 border-lime-500' : '  text-gray-500')}
          class:selected={activeTab === menu.code}
          on:click={() => activeTab = menu.code}
        >
          {menu.label}
        </button>
      {/each}
    </div>

    <div class="h-200 mx-10 overflow-scroll">
    {#if activeTab === '0000'}
      {#each cardDataList as data}
        <PostCard cardData={data}/>
      {/each}
    {:else if activeTab === '0001'}
      <div>
        作業中の内容
      </div>
    {:else if activeTab === '0002'}
      <div>
        作業終了の内容
      </div>
    {:else if activeTab === '0003'}
      <div>
        いいねタブの内容
      </div>
    {/if}
    </div>
  </div>


</div>

<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import PostCard from '$lib/components/molecules/PostCard.svelte';
  import type { PostData } from '$lib/types/data';
  import { mockPosts } from '$lib/mocks/data';
 
  let userId: string;
  let activeTab: string = '0000';
  const cardDataList: Array<PostData> = [];

  $: userId = $page.params.id;

  const MENU_LIST = [
    { label: 'すべての投稿', code: '0000' },
    { label: '作業中の投稿', code: '0001' },
    { label: '作業終了した投稿', code: '0002' },
    { label: 'フォロー中の作業投稿', code: '0003' }
  ];

  $: if (userId && activeTab === '0000') {
    cardDataList.length = 0;
    mockPosts.filter(post => post.postOwner.id === userId).forEach(post => {
      cardDataList.push(post);
    });
  }

</script>