<template>
    <div class="login-container">
        <div class="login-card">
            <h2 class="login-title">登录</h2>
            <form class="login-form" @submit.prevent="login">
                <div class="form-field">
                    <input type="email" id="email" v-model="email" placeholder="email" required />
                </div>
                <div class="form-field">
                    <input type="password" id="password" v-model="password" placeholder="password" required />
                </div>
                <button type="submit" class="submit-button">登录</button>
            </form>
            <div class="other-login-container">
                <button @click="signGoogle"> google</button>
                <button @click="signGitHub"> github</button>
                <button @click="$router.push('/magic')">magic link</button>
            </div>
        </div>
    </div>
</template>


<script  lang="ts">
import { signInWithEmail } from '../../supe/auth';
import useStore from '../../store';
import { signInWithGitHub, signInWithGoogle } from '../../supe/auth';
export default {
    data() {
        return {
            email: '987346185@qq.com',
            password: 'weitanai1Q',
        }
    },
    methods: {
        login() {
            if (!this.email || !this.password) {
                return;
            }
            signInWithEmail(this.email, this.password).then(res => {
                const { data, error } = res;

                if (error) {
                    console.error('error', error);
                } else {
                    const store = useStore();
                    store.setUserInfo(data);
                    this.$router.push('/');
                }
            }).catch(err => console.log(err));
        },
        signGoogle() {
            signInWithGoogle().then(res => {
                const { data, error } = res;

                if (error) {
                    console.error('error', error);
                } else {
                    console.log('---gogle', data)
                    const store = useStore();
                    store.setUserInfo(data);
                    this.$nextTick(() => {
                        this.$router.push('/');
                    })
                }
            }).catch(err => console.log(err));
        },
        signGitHub() {
            signInWithGitHub().then(res => {
                const { data, error } = res;

                if (error) {
                    console.error('error', error);
                } else {
                    const store = useStore();
                    store.setUserInfo(data);
                    this.$nextTick(() => {
                        this.$router.push('/');
                    })
                }
            }).catch(err => console.log(err));
        }
    }
}

</script>

<style scoped>
.login-wrapper {
    height: 400px;
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    background: rgb(195, 191, 191);
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.input-container {
    margin: 10px;
}

.submit-confirm {
    margin-top: 30px;
}

.other-login-container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
</style>


<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-card {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.login-title {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.login-form {
    display: grid;
    gap: 1rem;
}

.form-field {
    display: grid;
    gap: 0.5rem;
}

label {
    font-weight: bold;
}

input[type='email'],
input[type='password'] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

.submit-button {
    background-color: #1c64f2;
    color: #ffffff;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-button:hover {
    background-color: #1452cc;
}
</style>