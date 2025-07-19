import { writable } from 'svelte/store';

export const isLogin = writable(null);
export const isLoading = writable(true);
export const openPostModal = writable(false);
export const postId = writable<string|null>(null);