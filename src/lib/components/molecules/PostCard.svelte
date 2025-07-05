<div class={"post-card relative inline-block border border-lime-400 w-full min-h-[200px] mb-5 rounded-3xl overflow-hidden" + (className!==""? ` ${className}` : '')}>
  <div class="absolute left-0 right-0 top-0 h-fit">
    <PostCardHeader/>
  </div>

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <img
    src={cardData.img}
    class="w-full h-full object-cover rounded-3xl hover:cursor-pointer"
    on:click={navigateToPostPetail}
  />

  <div class="absolute left-0 right-0 bottom-0 pointer-events-auto">
    <PostCardFooter/>
  </div>
</div>

<script lang="ts">
  import type { PostData } from "$lib/types/data";
  import PostCardFooter from "./PostCardFooter.svelte";
  import PostCardHeader from "./PostCardHeader.svelte";

  export let className: string = '';
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

  const navigateToPostPetail = () => {
    if(window.location.pathname !== '/') {
      return;
    }
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

