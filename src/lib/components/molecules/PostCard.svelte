<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="post border border-lime-400 bg-lime-50 w-[700px] mb-5 rounded-3xl p-5" on:click={navigateToPostPetail}>
  <div class="flex justify-between">
    <div class="flex items-center">
      <div class="w-22 h-22 bg-lime-400 rounded-full me-5">
        <img src={cardData.postOwner.iconImg} alt="User Icon" class="w-full h-full rounded-full object-cover">
      </div>

      <div class="flex flex-col">
        <span class="text-3xl text-lime-500">{cardData.postOwner.name}</span>
        <span class="text-gray-400">{cardData.postOwner.id}</span>
      </div>
    </div>
    <!-- 作業ステータス -->
    <div class="flex text-gray-500">
      <span class="me-5 mt-6">
        {cardData.postDatetime}
      </span>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={"size-15 mt-3 me-5" + (cardData.completed ? ' text-lime-500' : ' text-gray-300')}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </div>
  </div>

  <div class="main h-110 mt-5 overflow-y-hidden relative mb-5">
    {cardData.contents}

    <div class=" mt-10 bg-gray-300 w-150 h-300">
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src={cardData.img} alt="Post Image" class="w-full h-full object-cover rounded-lg">
    </div>
    <!-- フェードアウト効果 -->
    <div class="fadeout absolute bottom-0 left-0 w-full h-20 pointer-events-none"></div>
  </div>

  <hr class="text-lime-400"/>

  <div class="flex w-full justify-between items-center mt-1">

    <div class="flex items-center text-lime-700">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        {cardData.viewNum}
      </div>

      <div class="flex items-center ms-5">
        {#if cardData.isLiked}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        {:else}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        {/if}
        {cardData.likeNum}
      </div>

      <div class="flex items-center ms-5">
        {#if cardData.isBookmarked}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
          <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
        </svg>
        {:else}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>
        {/if}
        {cardData.bookmarkNum}
      </div>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 ms-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    </div>

    <div class="flex items-center">
      <span class="me-5">1/10</span>
      {#if open}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
      </svg>
      {:else}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-1">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
      {/if}
    </div>
  </div>

</div>

<script lang="ts">
    import type { PostData } from "$lib/types/data";

  let like = false;
  let bookmark = false;
  let open = false;

  interface UserInfo{
    id: string;
    name: string;
    icon: string
  }

  export let cardData: PostData = {
    id: '',
    contents: '',
    postOwner: {id: '', name: '', iconImg: ''},
    postDatetime: '',
    img: '',
    subPosts: [],
    completed: false,
    viewNum: 0,
    likeNum: 0,
    bookmarkNum: 0,
    isLiked: false,
    isBookmarked: false,
  }

  // export let postId: string = '1';
  // export let postContent: string = '投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容';
  // export let userInfo: UserInfo = {id: 'test_user', name: 'テストユーザ-', icon: 'https://example.com/icon.png'};
  // export let postDatetime: string = '2025-06-01 12:34:56';
  // export let doneWork: boolean = false;
  // export let viewer: number = 1;
  // export let favoNum: number = 1;
  // export let bookmarkNum: number = 1;
  // export let subPostIds: string[] = ['2', '3', '4'];

  const navigateToPostPetail = ()=>{
    window.location.href = `/post/${cardData.id}`;
  }

</script>

  <style>
    .fadeout {
      background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgb(247 254 231) 100%);
    }
  </style>

