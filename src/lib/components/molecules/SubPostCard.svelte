<div class="post-card relative inline-block border border-lime-400 min-h-[200px] mb-5 rounded-3xl overflow-hidden">
   <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <img
    src={cardData.img}
    class="w-full h-full object-cover rounded-3xl hover:cursor-pointer"
  />

  <div class="absolute left-0 right-0 bottom-0 pointer-events-auto">
    <PostCardFooter type="sub" contents={cardData.contents}/>
  </div>
</div>

<script lang="ts">
import type { PostData, SubPostData } from "$lib/types/data";
  import PostCardFooter from "./PostCardFooter.svelte";

  let subPostData = {
    id: "sub1",
    contents: "サブ投稿の内容",
    img: "https://animekabegami.com/image_wallpaper/1672489990.jpg",
    likeNum: 2,
    isLiked: false,
    postDatetime: '2024/01/24 14:56:78'
  }

  export let cardData: SubPostData;
</script>
