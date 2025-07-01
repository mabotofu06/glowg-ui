<div class="w-full h-full overflow-y-auto bg-white">
  <PostCard cardData={postData}/>

  {#each mockSubPostList as subPost}
  <SubPostCard/>
  {/each}

  {#if isAuther}
  <div class="add-sub-post bg-lime-50 ms-5 p-5 mt-3">
    <button class="w-full h-full text-center text-lg text-lime-600">
      投稿
    </button>
  </div>
  {/if}

  <!-- {#if openModal}
  <div class="overlay flex items-center justify-center">

    <div class="sub-post-modal bg-white w-96 rounded-lg p-5">
      <div class="header">
        <h2 class="text-xl mb-3">モーダルタイトル</h2>
      </div>

      <div class="main">
        <p>ここにモーダルの内容が入ります。</p>
      </div>

      <div class="footer mt-5 justify-between flex">
        <button class="bg-lime-500 text-white px-4 py-2 rounded" on:click={() => openModal = false}>
          閉じる
        </button>
        <button class="bg-lime-300 text-white px-4 py-2 rounded ms-3" on:click={() => openModal = false}>
          投稿
        </button>
      </div>
    </div>

  </div>
  {/if} -->
</div>

<script lang="ts">
  import { page } from "$app/stores";
  import PostCard from "$lib/components/molecules/PostCard.svelte";
    import SubPostCard from "$lib/components/molecules/SubPostCard.svelte";
    import { onMount } from "svelte";

  const loginUser = {
    id: "@test_user",
    name: "テストユーザー",
    iconImg: "https://example.com/icon.png"
  };

  let postId: string;
  let isAuther:boolean = true;
  let openModal: boolean = true;
   let postData: any = {}; // 初期値を空オブジェクトに

  $: postId = $page.params.id;

  onMount(() => {
    postData = JSON.parse(sessionStorage.getItem(postId) ?? '{}');
  });
  const mockSubPostList = [{
    id: "sub1",
    contents: "サブ投稿の内容",
    img: "https://www.witstudio.co.jp/news/kiracard_sample.jpg",
    viewNum: 50,
    likeNum: 2,
    isLiked: false,
    postDatetime: '2024/01/24 14:56:78'
  },{
    id: "sub2",
    contents: "別のサブ投稿の内容",
    img: "https://animekabegami.com/image_wallpaper/1672489990.jpg",
    viewNum: 30,
    likeNum: 1,
    isLiked: false,
    postDatetime: '2024/01/25 15:00:00'
  },{
    id: "sub3",
    contents: "さらに別のサブ投稿の内容",
    img: "",
    viewNum: 20,
    likeNum: 0,
    isLiked: false,
    postDatetime: '2024/01/26 16:00:00'
  }
]
</script>

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
</style>