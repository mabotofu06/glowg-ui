import { supabase } from './client'; // supabaseクライアントのインスタンスをインポート

// タイムラインポスト取得API
export async function getTimelinePosts(getNum: number = 30) {
  const { data, error } = await supabase
    .from('tbl_timeline_posts') // テーブル名: posts
    .select('*')
    .order('created_at', { ascending: false })
    .limit(getNum); // 新しい順
    
  if (error) {
    throw error;
  }
  return data;
}

//ポスト詳細取得API
export async function getSubPostsByPostId(postId: number) {
  const { data, error } = await supabase
    .from('tbl_timeline_sub_posts') // テーブル名: sub_posts
    .select('*')
    .eq('parent_post_id', postId) // post_idでフィルタリング
    .order('post_order', { ascending: false }); // 並び順
  if (error) {
    throw error;
  }
  return data;
}

export async function uploadFile(file: File, userId: string) {
  const filePath = `${userId}_${crypto.randomUUID()}`;
  const { data, error } = await supabase.storage
    .from('post-images') // バケット名
    .upload(filePath, file);

  if (error) throw error;

  // 公開URLを取得
  const { data: publicUrlData } = supabase.storage
    .from('post-images')
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}

/**ポスト新規投稿API */
export async function insertMainPost(post: any){
  const { data, error } = await supabase
    .from('tbl_timeline_posts') // テーブル名: posts
    .insert([post])
    .select('*'); // 挿入後のデータを取得

  if (error) {
    throw error;
  }
  return data;
}

/**ポスト追加投稿API */
export async function insertSubPost(parentPost: any, subPost: any, completed: boolean = false) {
  const { data, error } = await supabase
    .from('tbl_timeline_sub_posts') // テーブル名: sub_posts
    .insert([subPost])
    .select('*'); // 挿入後のデータを取得

  if (error) {
    throw error;
  }

  // 親ポストの更新
  parentPost.sub_post_num += 1; // 親ポストのサブポスト数を更新
  const { data: parentUpdateData, error: parentUpdateError } = await supabase
      .from('tbl_timeline_posts')
      .update({ sub_post_num: parentPost.sub_post_num, completed: completed })
      .eq('id', parentPost.post_id)
      .select('*'); // 更新後のデータを取得

      if (parentUpdateError) {
    throw parentUpdateError;
  }

  return data;
}


// ID指定で1件取得
export async function fetchPostById(id: number) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw error;
  }
  return data;
}