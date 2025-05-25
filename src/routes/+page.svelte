<div class="flex h-full">
  <div class="flex flex-col w-full h-full overflow-y-auto mx-3">
    {#each cardDataList as cardData}
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
  

  function loginWithGoogle() {
    signInWithProvider('google');
  }
  let cardDataList: PostData[] = mockPosts;
</script>