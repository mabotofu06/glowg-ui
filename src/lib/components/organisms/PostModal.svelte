<div
  class="flex flex-col items-center justify-center h-full"
>
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="bg-white rounded-xl shadow-2xl p-8 w-full max-w-[500px] text-center"
    on:dragover|preventDefault={handleDragOver}
    on:drop|preventDefault={handleDrop}
  >
    <h2 class="text-2xl font-bold mb-4 text-lime-700">新しい投稿</h2>
    <form on:submit|preventDefault={submitPost} class="flex flex-col gap-4">
      <textarea
        bind:value={content}
        class="w-full border border-lime-200 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
        rows="5"
        placeholder="今日はこんな作業をしました"
        required
        on:input={() => {
          if (content.length > 500) {
            content = content.slice(0, 500);
          }          
        }}
      ></textarea>
      <div class="flex flex-col items-center gap-2">
        <label
          class="flex flex-col items-center px-4 py-3 bg-lime-50 border-2 border-dashed border-lime-300 rounded-lg cursor-pointer hover:bg-lime-100 transition"
        >
          <svg class="w-8 h-8 text-lime-400 mb-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
          </svg>
          <span class="text-lime-600 font-medium">画像を選択またはドラッグ&ドロップ</span>
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
            <img src={imagePreview} alt="プレビュー" class="max-h-200 mx-auto mb-2 rounded-lg shadow-md border border-lime-200 object-contain" />
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
          on:click={submitPost}
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
    import { insertMainPost, uploadFile } from '$lib/supabase/postClient';
    import type { PostInsertDto } from '$lib/types/dto';

  const dispatch = createEventDispatcher();

  let content = '';
  let loading = false;
  let error: string | null = null;
  let imagePreview: string | null = null;
  let fileInput: HTMLInputElement | null = null;
  let imageFiles: File[] = [];
  let imagePreviews: string[] = [];

  // fileInput から imageFiles に変換する関数
  function syncImageFilesFromInput() {
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      imageFiles = Array.from(fileInput.files).slice(0, 4);
    } else {
      imageFiles = [];
    }
  }

  async function submitPost() {
    loading = true;
    error = null;

    // if(!imageFiles.length){
    //   error = '画像を選択してください。';
    //   loading = false;
    //   return;
    // }

    // const filePathList = await Promise.all(imageFiles.map(async file => {
    //   return await uploadFile(file, '');      
    // }));

    // if (filePathList.some(path => path === null)) {
    //   error = '画像のアップロードに失敗しました。';
    //   loading = false;
    //   return;
    // }

    const postData: PostInsertDto = {
      user_id: '@ui_user', // ユーザーID
      user_name: 'UIテストユーザー', // ユーザー名
      user_icon: '', // ユーザーアイコンURL

      contents: content, // ポスト内容
      file_path1: '', // ポスト画像URL
      file_path2: '', // ポスト画像URL
      file_path3: '', // ポスト画像URL
      file_path4: '' // ポスト画像URL
    }
    
    const res = insertMainPost(postData);

    console.log('投稿データ:', res);
    
    loading = false;
    closeModal();
  }

  function closeModal() {
    $openPostModal = false;
  }

  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target?.files?.[0];
    if (file) {
      previewImage(file);
    } else {
      imagePreview = null;
    }
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
    event.dataTransfer!.dropEffect = 'copy';
  }

  function handleDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files?.[0];
    if (file && file.type.startsWith('image/')) {
      previewImage(file);
      // input[type=file]の値も同期
      if (fileInput) {
        // 新しいFileListを作れないので、inputをリセット
        fileInput.value = '';
      }
    }
  }

  function previewImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
</script>
