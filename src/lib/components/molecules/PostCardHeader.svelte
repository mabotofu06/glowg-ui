<div class="post-card-header flex justify-between items-center rounded-full py-2">
  <div class="flex items-center">
    <div class="w-12 h-12 bg-lime-400 rounded-full mx-5">
      <img src={userIcon} alt="User Icon" class="w-full h-full rounded-full object-cover">
    </div>

    <div class="flex flex-col">
      <span class="text-xl text-lime-800">{userName}</span>
      <span class="text-sm text-gray-700">{userId}</span>
    </div>
  </div>
  <!-- 作業ステータス -->
  <div class="flex items-center text-gray-900">
    <span class="me-5">
    {datetime}
    </span>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={"size-10 me-5" + (completed ? ' text-lime-500' : ' text-gray-300')}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  </div>
</div>


<script lang="ts">
import type { PostData } from "$lib/types/data";
export let userId: string;
export let userName: string;
export let userIcon: string;
export let datetime: string;
export let completed: boolean = false;

</script>

<style>
  .post-card-header {
    background-color: rgba(255, 255, 255, 1);
    opacity: 0.4;
  }
  .post-card-header:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }
  .fadeout {
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgb(247 254 231) 100%);
  }
</style>

