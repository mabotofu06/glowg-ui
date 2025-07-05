import { isLoading, isLogin } from '$lib/stores/state';
import type { Reroute } from '@sveltejs/kit';

export const reroute: Reroute = async ({ url, fetch }) => {
  console.log('Rerouting to:', url.pathname);

  if(typeof window === 'undefined') return;
  isLoading.set(true);

  const session = localStorage.getItem('session') ?? '';

  if(!session){
    console.warn('not authorized')
    isLogin.set(false);
  }
  else{
    isLogin.set(true);
  }
  
};