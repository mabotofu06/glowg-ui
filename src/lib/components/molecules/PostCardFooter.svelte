<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class={"post-card-footer flex-col w-full items-center mt-1 p-3" + (openContents ? ' rounded-5xl' : ' rounded-full')}
>
  {#if openContents}
  <div class="text-xl">
    てすとてすとてすとて
    すとてすとてすとてす
    とてすとてすとてすと
    てすとてすとてすとて
    すとてすとてすとてす
    とてすとてすとてすと
    てすとてすとてすとて
    すとてすとてすとてす
    とてすとてすとてすと
    てすとてすとてすとて
    すとてすとてすとてす
    とてすとてすとてすと
    てすとてすとてすとて
    すとてすとてすとてす
    とてすとてすとてすと
  </div>
  {/if}

  <div class="flex justify-between text-lime-700">
  <div class="flex items-center">
    <div class="flex items-center">
      <ViewIcon/>
      {cardData.viewNum}
    </div>

    <div class="flex items-center ms-5">
      <LikeButton/>
      {cardData.likeNum}
    </div>

    <div class="flex items-center ms-5 me-10">
      <BookmarkButton/>
      {cardData.bookmarkNum}
    </div>

    <VerticalToggleButton bind:isUp={openContents}/>
  </div>

  <div class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 ms-10">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  </div>
  </div>
</div>

<script lang="ts">
import type { PostData } from "$lib/types/data";
import BookmarkButton from "../atoms/BookmarkButton.svelte";
import LikeButton from "../atoms/LikeButton.svelte";
    import VerticalToggleButton from "../atoms/VerticalToggleButton.svelte";
    import ViewIcon from "../atoms/ViewIcon.svelte";

let openContents = false;

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

</script>

<style>
  .post-card-footer{
    background-color: rgba(255, 255, 255, 0.7)
  }
  .fadeout {
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgb(247 254 231) 100%);
  }
</style>

