<div class="flex flex-col items-center justify-center h-full">
	<div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-[500px] text-center">
		
    <h2 class="text-2xl font-bold mb-4 text-lime-700">glowGを使うにはログインが必要です</h2>
		<p class="mb-6 text-gray-700">外部サービスで認証してください</p>
		
    <button
			class="flex items-center justify-center w-full border hover:bg-lime-700 text-lime-600 font-bold py-2 px-4 rounded mb-3 transition"
      on:click={() => signInWithProvider('google')}
		>		
      <svg class="w-5 h-5 mr-2" viewBox="0 0 48 48">
        <g>
          <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.9 33.1 30.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.2 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.3-4z"/>
          <path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.2 29.6 4 24 4c-7.2 0-13.4 4.1-16.7 10.7z"/>
          <path fill="#FBBC05" d="M24 44c5.2 0 10-1.7 13.7-4.7l-6.3-5.2C29.7 36.1 27 37 24 37c-6.1 0-11.3-4.1-13.2-9.6l-7 5.4C6.6 39.9 14.7 44 24 44z"/>
          <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.2 5.5-7.7 5.5-2.2 0-4.2-.7-5.8-2l-7 5.4C17.7 41.9 20.7 44 24 44c7.2 0 13.4-4.1 16.7-10.7z"/>
        </g>
      </svg>
      Googleでログイン
		</button>

		<button
			class="flex items-center justify-center w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded transition mb-3"
      on:click={() => signInWithProvider('github')}
		>
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
      </svg>
      GitHubでログイン
		</button>

    <button
      class="flex items-center justify-center w-full bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded transition"
      on:click={() => signInWithProvider('twitter')}
    >
      <svg class="w-5 h-5 mr-2" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="1227" rx="240" fill="black"/>
      <path d="M908.305 320H1090.6L726.305 722.857L1149.6 1200H857.305L585.305 892.571L281.305 1200H98.3052L482.305 770.286L80.3052 320H380.305L626.305 599.429L908.305 320ZM854.305 1112.57H946.305L370.305 401.143H271.305L854.305 1112.57Z" fill="white"/>
      </svg>
      Xでログイン
    </button>
	</div>
</div>

<script lang="ts">
  import { signInWithProvider } from "$lib/supabase/auth";

  const AUTH_SERVICE = [
    { name: 'Google', url: '/auth/google' },
    { name: 'GitHub', url: '/auth/github' },
    { name: 'X', url: '/auth/twitter' }
  ]
</script>
