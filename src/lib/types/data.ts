export interface UserData {
  id     :string;
  name   : string;
  iconImg: string;
}

export interface PostData {
  id: string;
  postOwner: UserData;
  contents: string;
  img: string;
  subPosts: string[];
  postDatetime: string;
  completed: boolean;
  viewNum: number;
  likeNum: number;
  isLiked: boolean;
  isBookmarked: boolean;
  bookmarkNum: number;
}

export interface SubPostData {
  id: string;
  contents: string;
  img: string;
  postDatetime: string;
  likeNum: number;
  isLiked: boolean;
}