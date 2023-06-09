<template>
  <div class="header-wrapper">
    <button @click="() => router.push('/login')" class="login-item">Login</button>
    <button @click="logOut()" class="logout-item">logout</button>
  </div>
  <SupeIndex/>
</template>

<script setup lang="ts">
import SupeIndex from './supe/SupeIndex.vue';
import { signOut} from '../supe/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

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
.login-item {
  margin:  8px;

}
.logout-item {
  margin: 8px;
}
</style>
