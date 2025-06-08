<div>

  <div class="mb-5 border-b border-gray-300 flex items-center">
    {#each MENU_LIST as menu}
    <button
      class={"px-6 py-2 focus:outline-none" + (selectMenuCode === menu.code ? '  text-lime-500 border-b-2 border-lime-500' : '  text-gray-500')}
      on:click={() => {selectMenuCode = menu.code}}
    >{menu.label}</button>
    {/each}
  </div>

  <PostCard
    cardData={onWorkData[0]}
  />
8</div>

<script lang="ts">
  import PostCard from "$lib/components/molecules/PostCard.svelte";
  import type { PostData } from "$lib/types/data";

  const MENU_LIST = [
    { code: "0000", label: "作業中の投稿" },
    { code: "0001", label: "完了した投稿" },
  ];

  let selectMenuCode = MENU_LIST[0].code;

  const loginUser = {
    id: "@test_user1",
    name: "テストユーザー",
    iconImg: "https://example.com/icon.png"
  }

  const onWorkData: Array<PostData> = [{
    id: "1",
    postOwner: loginUser,
    contents: "Sample Work",
    img: "https://example.com/sample-work.jpg",
    subPosts: [],
    completed: false,
    viewNum: 100,
    likeNum: 10,
    bookmarkNum: 5,
    isLiked: false,
    isBookmarked: false,
    postDatetime: '2025/06/08 12:34:56',
  }];

</script>