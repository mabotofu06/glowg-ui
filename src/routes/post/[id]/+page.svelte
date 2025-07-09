<div class="w-full bg-white">
  <PostCard cardData={postData}/>

  {#each mockSubPostList as subPost}
  <SubPostCard/>
  {/each}

  {#if isAuther}
    <button class="w-full py-3 bg-lime-100 text-center text-lg text-lime-600 hover:bg-lime-200 rounded-lg hover:shadow-lg"
      on:click={() => $openPostModal = true}
    >
      投稿を追加
    </button>
  {/if}

  {#if $openPostModal}
	<div class="overlay">
		<PostModal type="add"/>
	</div>
  {/if}
</div>

<script lang="ts">
  import { page } from "$app/stores";
  import PostCard from "$lib/components/molecules/PostCard.svelte";
  import SubPostCard from "$lib/components/molecules/SubPostCard.svelte";
  import PostModal from "$lib/components/organisms/PostModal.svelte";
  import { openPostModal } from "$lib/stores/state";
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