import { computed, ref } from 'vue';
const CURRENT='nivora_current_user', USERS='nivora_users';
const parse=(key,fallback)=>{ try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback));}catch{return fallback;} };
const user=ref(parse(CURRENT,null));
const save=(value)=>{ user.value=value; value?localStorage.setItem(CURRENT,JSON.stringify(value)):localStorage.removeItem(CURRENT); };
export function useAuth(){
  const loggedIn=computed(()=>Boolean(user.value));
  const signup=({name,email})=>{ const e=email.trim().toLowerCase(); const u={id:`niv_${Date.now()}`,name:name.trim(),email:e,createdAt:new Date().toISOString()}; const list=parse(USERS,[]).filter(x=>x.email!==e); localStorage.setItem(USERS,JSON.stringify([...list,u])); save(u); return u; };
  const login=({email})=>{ const e=email.trim().toLowerCase(); const found=parse(USERS,[]).find(x=>x.email===e); const u={...(found||{id:`niv_${Date.now()}`,name:e.split('@')[0].replace(/[._-]/g,' '),email:e,createdAt:new Date().toISOString()}),lastLoginAt:new Date().toISOString()}; save(u); return u; };
  return {user,loggedIn,signup,login,logout:()=>save(null)};
}
