import TwinalyzeAnalytics from '@twinalyze/web-analytics';
import { computed, ref } from 'vue';
const KEY='nivora_cart';
const load=()=>{ try{return JSON.parse(localStorage.getItem(KEY)||'[]');}catch{return [];} };
const items=ref(load());
const save=()=>localStorage.setItem(KEY,JSON.stringify(items.value));
export function useCart(){
  const count=computed(()=>items.value.reduce((n,i)=>n+i.quantity,0));
  const subtotal=computed(()=>items.value.reduce((n,i)=>n+i.product.price*i.quantity,0));
  const add=(product,quantity=1)=>{ const q=Math.max(1,Math.floor(quantity)); const found=items.value.find(i=>i.product.id===product.id); found?found.quantity+=q:items.value.push({product,quantity:q}); save(); 
  TwinalyzeAnalytics.track('addToCart'
    ,{productId:product.id,
      productName:product.name,
      category:product.category,
      price:product.price,
      quantity:q,
      cartQuantity:count.value,
      currency:'USD',
      source:'nivora_vue_npm_store'}); };
  const setQuantity=(id,q)=>{ const item=items.value.find(i=>i.product.id===id); if(!item)return; if(q<=0){remove(id);return;} item.quantity=q; save(); };
  const remove=(id)=>{ items.value=items.value.filter(i=>i.product.id!==id); save(); };
  const clear=()=>{ items.value=[]; save(); };
  return {items,count,subtotal,add,setQuantity,remove,clear};
}
