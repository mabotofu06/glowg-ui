import { writable } from 'svelte/store';

export const isLogin = writable(false);
export const isLoading = writable(true);
export const openPostModal = writable(false);
