import type { PostData, UserData } from "$lib/types/data";

export const mockLoginUser: UserData = {
  id: "@test_user",
  name: "テストユーザー",
  iconImg: "https://example.com/icon.jpg"
}

export const mockUsers: UserData[] = [
  {
    id: "@user1",
    name: "ユーザー1",
    iconImg: "https://example.com/user1.jpg"
  },{
    id: "@user2",
    name: "ユーザー2",
    iconImg: "https://example.com/user2.jpg"
  },{
    id: "@user3",
    name: "ユーザー3",
    iconImg: "https://example.com/user3.jpg"
  }
];

export const mockPosts: Array<PostData> = [
  {
    id: "post1",
    postOwner: mockUsers[0],
    contents: "これはテスト投稿です。",
    img: "https://example.com/post1.jpg",
    subPosts: [],
    postDatetime: "2023-10-01T12:00:00Z",
    completed: false,
    viewNum: 100,
    likeNum: 10,
    isLiked: false,
    isBookmarked: false,
    bookmarkNum: 5
  },{
    id: "post3",
    postOwner: mockUsers[2],
    contents: "テスト投稿3です。",
    img: "https://example.com/post3.jpg",
    subPosts: [],
    postDatetime: "2023-10-03T12:00:00Z",
    completed: false,
    viewNum: 50,
    likeNum: 5,
    isLiked: false,
    isBookmarked: false,
    bookmarkNum: 2
  },{
    id: "post4",
    postOwner: mockLoginUser,
    contents: "ログインユーザーのテスト投稿です。",
    img: "https://example.com/post4.jpg",
    subPosts: [],
    postDatetime: "2023-10-04T12:00:00Z",
    completed: true,
    viewNum: 300,
    likeNum: 30,
    isLiked: true,
    isBookmarked: false,
    bookmarkNum: 0

  },{
    id: "post2",
    postOwner: mockUsers[1],
    contents: "別のテスト投稿です。",
    img: "https://example.com/post2.jpg",
    subPosts: [],
    postDatetime: "2023-10-02T12:00:00Z",
    completed: true,
    viewNum: 200,
    likeNum: 20,
    isLiked: true,
    isBookmarked: true,
    bookmarkNum: 15
  },{
    id: "post5",
    postOwner: mockUsers[1],
    contents: "ユーザー2のテスト投稿です。",
    img: "https://example.com/post5.jpg",
    subPosts: [],
    postDatetime: "2023-10-05T12:00:00Z",
    completed: false,
    viewNum: 150,
    likeNum: 12,
    isLiked: false,
    isBookmarked: true,
    bookmarkNum: 8
  },{
    id: "post6",
    postOwner: mockUsers[0],
    contents: "ユーザー1の別のテスト投稿です。",
    img: "https://example.com/post6.jpg",
    subPosts: [],
    postDatetime: "2023-10-06T12:00:00Z",
    completed: true,
    viewNum: 400,
    likeNum: 40,
    isLiked: true,
    isBookmarked: false,
    bookmarkNum: 1
  },{
    id: "post7",
    postOwner: mockUsers[2],
    contents: "ユーザー3のテスト投稿です。",
    img: "https://example.com/post7.jpg",
    subPosts: [],
    postDatetime: "2023-10-07T12:00:00Z",
    completed: false,
    viewNum: 80,
    likeNum: 8,
    isLiked: false,
    isBookmarked: true,
    bookmarkNum: 3
  },{
    id: "post8",
    postOwner: mockLoginUser,
    contents: "ログインユーザーの別のテスト投稿です。",
    img: "https://example.com/post8.jpg",
    subPosts: [],
    postDatetime: "2023-10-08T12:00:00Z",
    completed: false,
    viewNum: 250,
    likeNum: 25,
    isLiked: true,
    isBookmarked: false,
    bookmarkNum: 4
  },{
    id: "post9",
    postOwner: mockUsers[0],
    contents: "ユーザー1の最新のテスト投稿です。",
    img: "https://example.com/post9.jpg",
    subPosts: [],
    postDatetime: "2023-10-09T12:00:00Z",
    completed: true,
    viewNum: 600,
    likeNum: 60,
    isLiked: true,
    isBookmarked: true,
    bookmarkNum: 10
  },{
    id: "post10",
    postOwner: mockUsers[1],
    contents: "ユーザー2の最新のテスト投稿です。",
    img: "https://example.com/post10.jpg",
    subPosts: [],
    postDatetime: "2023-10-10T12:00:00Z",
    completed: false,
    viewNum: 350,
    likeNum: 35,
    isLiked: false,
    isBookmarked: true,
    bookmarkNum: 7
  },{
    id: "post11",
    postOwner: mockUsers[2],
    contents: "ユーザー3の最新のテスト投稿です。",
    img: "https://example.com/post11.jpg",
    subPosts: [],
    postDatetime: "2023-10-11T12:00:00Z",
    completed: true,
    viewNum: 450,
    likeNum: 45,
    isLiked: true,
    isBookmarked: false,
    bookmarkNum: 6
  },{
    id: "post12",
    postOwner: mockLoginUser,
    contents: "ログインユーザーの最新のテスト投稿です。",
    img: "https://example.com/post12.jpg",
    subPosts: [],
    postDatetime: "2023-10-12T12:00:00Z",
    completed: false,
    viewNum: 700,
    likeNum: 70,
    isLiked: true,
    isBookmarked: true,
    bookmarkNum: 9
  }
];