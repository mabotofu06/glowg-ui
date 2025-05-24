<script lang="ts">
	import { Datepicker } from 'svelte-calendar';  let selectedDate = new Date();
</script>

<div class="flex h-full">
  <div class="flex flex-col w-full h-full overflow-y-auto mx-3">
    <div class="post border border-lime-400 bg-lime-50 w-[700px] h-[500px] mb-5 rounded-3xl"></div>
    <div class="post border border-lime-400 bg-lime-50 w-[700px] h-[500px] mb-1 rounded-3xl"></div>
    <div class="post border border-lime-400 bg-lime-50 w-[700px] h-[500px] mb-1 rounded-3xl"></div>
    <div class="post border border-lime-400 bg-lime-50 w-[700px] h-[500px] mb-1 rounded-3xl"></div>
    <!-- Svelteカレンダーコンポーネント例（svelte-calendarなどを使う場合） -->
  </div>

  <div>
    <input type="text" class="border border-lime-400 w-[300px] h-[50px] mb-1" placeholder="メッセージを入力"/>
  <Datepicker/>
  <p class="mt-2 text-sm text-gray-600">選択日: {selectedDate.toLocaleDateString()}</p>
  </div>

</div>

