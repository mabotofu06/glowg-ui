<div class="flex h-full">
  <div class="flex flex-col w-full h-full overflow-y-auto mx-3">
    {#each postDataList as cardData}
      <PostCard {cardData}/>
    {/each}

    <!-- Svelteカレンダーコンポーネント例（svelte-calendarなどを使う場合） -->
  </div>

  <div>
    <input type="text" class="border border-lime-400 w-[300px] h-[50px] mb-1" placeholder="メッセージを入力"/>
  <Datepicker/>
  <p class="mt-2 text-sm text-gray-600">選択日: {selectedDate.toLocaleDateString()}</p>
  </div>

</div>

<script lang="ts">
	import { Datepicker } from 'svelte-calendar';  let selectedDate = new Date();
  import PostCard from '$lib/components/molecules/PostCard.svelte';
  import type { PostData } from '$lib/types/data';
  import { mockPosts } from '$lib/mocks/data';
  import {signInWithProvider} from '$lib/supabase/auth';
    import { onMount } from 'svelte';
    import { getTimelinePosts } from '$lib/supabase/postClient';
  

  function loginWithGoogle() {
    signInWithProvider('google');
  }
  let postDataList: PostData[];

  onMount(async ()=>{
    postDataList = (await getTimelinePosts()).map((post) => ({
      id: String(post.post_id),
      userId: post.user_id,
      postOwner: {id: post.user_id, name: post.user_name, iconImg: post.user_icon}, // Provide default or map accordingly
      contents: post.contents, // Fallback to post.content if contents is missing
      img: post.file_path1, // Fallback to post.image_url if img is missing
      subPosts: [],
      postDatetime: post.created_at,
      likeNum: post.like_num ?? 0,
      isLiked: false,
      viewNum: post.view_num ?? 0,
      completed: post.completed ?? false,
      isBookmarked: false,
      bookmarkNum: post.bookmark_num ?? 0,
      // Add any other required fields with defaults as needed
    }));
    console.log('Fetched posts:', postDataList);
  })
</script>