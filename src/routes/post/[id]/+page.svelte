<div class="w-full h-full overflow-y-auto bg-white">
  <div class="main-post bg-lime-100 p-5 rounded-2xl">
    <div class="header flex justify-between mb-5">
      <div class="flex">
        <div class="bg-lime-300 h-16 w-16 rounded-full"></div>
        <div class="flex flex-col mx-3">
          <span class="text-2xl">テストユーザー</span>
          <span class="">@test_user</span>
        </div>
      </div>

      <span>2024/01/23 12:34:56</span>
    </div>

    <div class="content min-h-48 mb-5">
      テスト投稿１<br/>
      作業中
    </div>

    <div class="footer flex">
      <div class="view flex items-center">
        <div class="bg-lime-300 h-8 w-8 rounded-full"></div>
        <span class="mx-3">100</span>
      </div>

      <div class="like flex items-center">
        <div class="bg-lime-300 h-8 w-8 rounded-full"></div>
        <span class="mx-3">5</span>
      </div>

      <div class="bookmark flex items-center">
        <div class="bg-lime-300 h-8 w-8 rounded-full"></div>
        <span class="mx-3">10</span>
      </div>
    </div>
  </div>

  {#each mockSubPostList as subPost}
  <div class="sub-post bg-lime-50 ms-5 p-5 mt-3">
    <div class="header flex justify-between mb-5">
      <span>{subPost.postDatetime}</span>
    </div>

    <div class="content min-h-32 mb-5">
      {subPost.contents}
    </div>

    <div class="footer flex">
      <div class="view flex items-center">
        <div class="bg-lime-300 h-8 w-8 rounded-full"></div>
        <span class="mx-3">{subPost.viewNum}</span>
      </div>

      <div class="like flex items-center">
        <div class="bg-lime-300 h-8 w-8 rounded-full"></div>
        <span class="mx-3">{subPost.likeNum}</span>
      </div>
    </div>
  </div>
  {/each}

  {#if isAuther}
  <div class="add-sub-post bg-lime-50 ms-5 p-5 mt-3">
    <button class="w-full h-full text-center text-lg text-lime-600">
      投稿
    </button>
  </div>
  {/if}

  {#if openModal}
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
  {/if}
</div>

<script lang="ts">
  import { page } from "$app/stores";

  const loginUser = {
    id: "@test_user",
    name: "テストユーザー",
    iconImg: "https://example.com/icon.png"
  };

  let postId: string;
  let isAuther:boolean = true;
  let openModal: boolean = true;
  $: postId = $page.params.id;

  const mockSubPostList = [{
    id: "sub1",
    contents: "サブ投稿の内容",
    img: "",
    viewNum: 50,
    likeNum: 2,
    isLiked: false,
    postDatetime: '2024/01/24 14:56:78'
  },{
    id: "sub2",
    contents: "別のサブ投稿の内容",
    img: "",
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