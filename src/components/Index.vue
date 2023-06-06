<template>
  <div class="header-wrapper">
    <button @click="signInWithGoogle"> google</button>
    <button @click="signInWithGitHub"> github</button>
    <button @click="router.push('/magic')">magic link</button>
    <button @click="() => router.push('/login')">Login</button>
    <button @click="logOut()">logout</button>
  </div>
  <Index/>

</template>

<script setup lang="ts">
import { signOut, signInWithGitHub, signInWithGoogle } from '../supe/auth';
import { useRouter } from 'vue-router';
const router = useRouter();
import Index from './supe/Index.vue';

const logOut = function () {
  console.log('log out');
  signOut();
}


</script>
<style scoped>
.header-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
