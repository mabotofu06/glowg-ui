<div class="post-card-header flex justify-between rounded-full py-3">
  <div class="flex items-center">
    <div class="w-12 h-12 bg-lime-400 rounded-full mx-5">
      <img src={cardData.postOwner.iconImg} alt="User Icon" class="w-full h-full rounded-full object-cover">
    </div>

    <div class="flex flex-col">
      <span class="text-3xl text-lime-500">{cardData.postOwner.name}</span>
      <span class="text-gray-400">{cardData.postOwner.id}</span>
    </div>
  </div>
  <!-- 作業ステータス -->
  <div class="flex text-gray-500">
    <span class="me-5">
    {cardData.postDatetime}
    </span>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={"size-10 me-5" + (cardData.completed ? ' text-lime-500' : ' text-gray-300')}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
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

</script>

<style>
  .post-card-header{
    background-color: rgba(255, 255, 255, 0.7)
  }
  .fadeout {
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgb(247 254 231) 100%);
  }
</style>

