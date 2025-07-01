<div class="post-card relative inline-block border border-lime-400 min-h-[200px] mb-5 rounded-3xl overflow-hidden">
  <div class="absolute left-0 right-0 top-0 h-fit">
    <!-- <PostCardHeader/> -->
  </div>

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <img
    src={subPostData.img}
    class="w-full h-full object-cover rounded-3xl hover:cursor-pointer"
    on:click={navigateToPostPetail}
  />

  <div class="absolute left-0 right-0 bottom-0 pointer-events-auto">
    <SubPostCardFooter/>
  </div>
</div>

<script lang="ts">
import type { PostData } from "$lib/types/data";
import SubPostCardFooter from "./SubPostCardFooter.svelte";

  let like = false;
  let bookmark = false;
  let open = false;

  let subPostData = {
    id: "sub1",
    contents: "サブ投稿の内容",
    img: "https://animekabegami.com/image_wallpaper/1672489990.jpg",
    viewNum: 50,
    likeNum: 2,
    isLiked: false,
    postDatetime: '2024/01/24 14:56:78'
  }

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

  const navigateToPostPetail = () => {
    // セッションストレージにポストデータを保存
    sessionStorage.setItem(`${cardData.id}`, JSON.stringify(cardData));
    window.location.href = `/post/${cardData.id}`;
  }

</script>

  <style>
    .fadeout {
      background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgb(247 254 231) 100%);
    }
  </style>

