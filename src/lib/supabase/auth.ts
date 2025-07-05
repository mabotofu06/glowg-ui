import type { OAuthResponse } from '@supabase/supabase-js';
import { supabase } from './client';

// サインアップ（新規登録）
export async function signUp(email: string, password: string) {
  return await supabase.auth.signUp({ email, password });
}

// サインイン（ログイン）
export async function signIn(email: string, password: string) {
  return await supabase.auth.signInWithPassword({ email, password });
}

// サインアウト
export async function signOut() {
  return await supabase.auth.signOut();
}

// 現在のユーザー取得
export function getUser() {
  return supabase.auth.getUser();
}

// 外部プロバイダーでのサインイン（例: Google, GitHub, Twitter など）
export async function signInWithProvider(provider: 'google' | 'github' | 'twitter'):Promise<OAuthResponse> {
  return await supabase.auth.signInWithOAuth({ provider });
}
