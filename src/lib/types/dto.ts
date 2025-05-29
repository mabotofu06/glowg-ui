export interface TimelinePostDto {
  post_id: number; // ポストID

  user_id: string; // ユーザーID
  user_name: string; // ユーザー名
  user_icon: string; // ユーザーアイコンURL

  contents: string; // ポスト内容
  file_path1: string; // ポスト画像URL
  file_path2: string; // ポスト画像URL
  file_path3: string; // ポスト画像URL
  file_path4: string; // ポスト画像URL
  completed: boolean; // 完了フラグ
  
  sub_post_num: number; // サブポスト数
  view_num: number; // ビュー数
  like_num: number; // いいね数
  bookmark_num: number; // ブックマーク数

  delete_flag: boolean; // 削除フラグ
  created_at: string; // 投稿日時
  deleted_at: string; // 削除日時
}

export interface TimelineSubPostDto {
  parent_post_id: number; // 親ポストID

  sub_post_id: number; // サブポストID
  contents: string; // サブポスト内容
  file_path1: string; // サブポスト画像URL
  file_path2: string; // サブポスト画像URL
  file_path3: string; // サブポスト画像URL
  file_path4: string; // サブポスト画像URL
  
  completed: boolean; // 完了フラグ
  
  view_num: number; // ビュー数
  like_num: number; // いいね数

  delete_flag: boolean; // 削除フラグ
  created_at: string; // 投稿日時
  deleted_at: string; // 削除日時
}