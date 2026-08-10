<script setup>
import { useAuth } from '../stores/auth';
import { useCart } from '../stores/cart';
const auth=useAuth(), cart=useCart();
</script>
<template>
  <div class="ticker"><span>Free demo delivery over $80</span><span>Vue npm analytics store</span><span>FCM testing included</span></div>
  <header>
    <RouterLink class="brand" to="/"><b>N</b><span><strong>NIVORA</strong><small>LIVING OBJECTS</small></span></RouterLink>
    <nav><RouterLink to="/">Home</RouterLink><RouterLink to="/products">Collection</RouterLink><RouterLink to="/testing-lab">Testing Lab</RouterLink></nav>
    <div class="actions"><RouterLink v-if="auth.user.value" to="/account">{{auth.user.value.name}}</RouterLink><RouterLink v-else to="/login">Login</RouterLink><RouterLink class="bag" to="/cart">Bag <i>{{cart.count.value}}</i></RouterLink></div>
  </header>
</template>
<style scoped>
.ticker{padding:8px 5vw;display:flex;justify-content:space-between;background:#1f231f;color:#f7f3ea;font-size:10px;letter-spacing:.12em;text-transform:uppercase}header{min-height:82px;padding:0 5vw;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:28px;position:sticky;top:0;z-index:20;background:rgba(247,243,234,.92);backdrop-filter:blur(16px);border-bottom:1px solid var(--line)}.brand{display:flex;align-items:center;gap:11px}.brand b{width:40px;height:40px;display:grid;place-items:center;border-radius:50%;background:var(--coral);font:900 22px Georgia}.brand span{display:grid}.brand strong{letter-spacing:.13em}.brand small{font-size:8px;color:var(--muted);letter-spacing:.22em}nav{display:flex;gap:28px}nav a{color:var(--muted);font-size:13px}nav a.router-link-active{color:var(--ink);font-weight:800}.actions{justify-self:end;display:flex;gap:15px;align-items:center;font-size:13px}.bag{padding:10px 14px;border:1px solid var(--ink);border-radius:999px;font-weight:800}.bag i{margin-left:6px;padding:2px 7px;border-radius:999px;background:var(--ink);color:white;font-style:normal}@media(max-width:850px){nav,.ticker span:nth-child(n+2){display:none}.ticker{justify-content:center}header{grid-template-columns:1fr auto;padding:0 18px}}@media(max-width:500px){.brand span,.actions>a:not(.bag){display:none}}
</style>
