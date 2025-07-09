<div class={"post-card relative inline-block border border-lime-400 w-full min-h-[200px] mb-5 rounded-3xl overflow-hidden" + (className!==""? ` ${className}` : '')}>
  <div class="absolute left-0 right-0 top-0 h-fit">
    <PostCardHeader/>
  </div>

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <!-- svelte-ignore a11y_missing_attribute -->
  <img
    src={cardData.img}
    class="w-full h-full object-cover rounded-3xl hover:cursor-pointer"
    on:click={navigateToPostPetail}
  />

  <div class="absolute left-0 right-0 bottom-0 pointer-events-auto">
    <PostCardFooter/>
  </div>

  <!-- svelte-ignore a11y_click_events_have_key_events -->
  {#if showImageModal}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" on:click={closeImageModal}>
      <div class="relative" on:click|stopPropagation>
        <img src={modalImageUrl} alt="拡大画像" class="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl" />
        <button class="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-red-200 transition" on:click={closeImageModal} aria-label="閉じる">
          <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  {/if}
</div>

<script lang="ts">
  import type { PostData } from "$lib/types/data";
  import PostCardFooter from "./PostCardFooter.svelte";
  import PostCardHeader from "./PostCardHeader.svelte";

  export let className: string = '';
  let like = false;
  let bookmark = false;
  let open = false;

  let showImageModal = false;
  let modalImageUrl = '';

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
      openImageModal();
      return;
    }
    // セッションストレージにポストデータを保存
    sessionStorage.setItem(`${cardData.id}`, JSON.stringify(cardData));
    window.location.href = `/post/${cardData.id}`;
  }

  function openImageModal() {
    modalImageUrl = cardData.img;
    showImageModal = true;
  }
  function closeImageModal() {
    showImageModal = false;
    modalImageUrl = '';
  }

</script>

  <style>
    .fadeout {
      background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgb(247 254 231) 100%);
    }
  </style>

