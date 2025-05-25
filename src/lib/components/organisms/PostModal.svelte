<div class="flex flex-col items-center justify-center h-full">
  <div class="bg-white rounded-xl shadow-2xl p-8 w-full max-w-[500px] text-center">
    <h2 class="text-2xl font-bold mb-4 text-lime-700">新しい投稿</h2>
    <form on:submit|preventDefault={submitPost} class="flex flex-col gap-4">
      <textarea
        bind:value={content}
        class="w-full border border-lime-200 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
        rows="5"
        placeholder="いまどうしてる？"
        required
      ></textarea>
      <div class="flex flex-col items-center gap-2">
        <label
          class="flex flex-col items-center px-4 py-3 bg-lime-50 border-2 border-dashed border-lime-300 rounded-lg cursor-pointer hover:bg-lime-100 transition"
        >
          <svg class="w-8 h-8 text-lime-400 mb-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
          </svg>
          <span class="text-lime-600 font-medium">画像を選択</span>
          <input
            type="file"
            accept="image/*"
            bind:this={fileInput}
            on:change={handleFileChange}
            class="hidden"
          />
        </label>
        {#if imagePreview}
          <div class="relative group">
            <img src={imagePreview} alt="プレビュー" class="max-h-40 mx-auto mb-2 rounded-lg shadow-md border border-lime-200 object-contain" />
            <button
              type="button"
              class="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-1 shadow hover:bg-red-100 transition group-hover:opacity-100 opacity-80"
              on:click={() => { imagePreview = null; if (fileInput) fileInput.value = ''; }}
              aria-label="画像を削除"
            >
              <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        {/if}
      </div>
      <div class="flex justify-end gap-2 mt-2">
        <button
          type="button"
          class="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition font-medium"
          on:click={closeModal}
        >
          キャンセル
        </button>
        <button
          type="submit"
          class="px-4 py-2 rounded-lg bg-lime-600 text-white font-bold hover:bg-lime-700 transition"
          disabled={loading}
        >
          {loading ? '投稿中...' : '投稿'}
        </button>
      </div>
    </form>
    {#if error}
      <p class="mt-4 text-red-600">{error}</p>
    {/if}
  </div>
</div>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { supabase } from '$lib/supabase/client';
  import { openPostModal } from '$lib/stores/state';

  const dispatch = createEventDispatcher();

  let content = '';
  let loading = false;
  let error: string | null = null;
  let imagePreview: string | null = null;
  let fileInput: HTMLInputElement | null = null;

  async function submitPost() {
    loading = true;
    error = null;
    // 投稿処理（例: supabaseにinsert）
    const { error: insertError } = await supabase
      .from('posts')
      .insert([{ content }]);
    loading = false;
    if (insertError) {
      error = '投稿に失敗しました。もう一度お試しください。';
    } else {
      content = '';
      imagePreview = null;
      if (fileInput) fileInput.value = '';
      dispatch('posted');
      closeModal();
    }
  }

  function closeModal() {
    $openPostModal = false;
  }

  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    } else {
      imagePreview = null;
    }
  }
</script>
