<template>
    <h1>use supebase storage</h1>
    <div>
        <img v-if="file" :src="imgUrl" alt="img">
        <input type="file" @change="handleFile" />
    </div>

    <div>
        <h1>handle file operation</h1>
        <button @click="submitFile">submit</button>
        <button @click="download">download file</button>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { uploadFile, downloadFile } from '../../supe/storage';

const file = ref<any>();

const handleFile = function (e: any) {
    console.log(e.target.files[0]);
    file.value = e.target.files[0];
}

const imgUrl = computed(() => {
    return file.value ? URL.createObjectURL(file.value) : '';
})

const submitFile = function () {
    if (!file.value) return;
    uploadFile(file.value, 'public/avatars1.jpg').then(res => {
        const { data, error } = res;
        if (error) {
            console.log(error);
            return;
        }
        console.log(data, 'upload');
    });
}

const download = async function () {
    const { data, error } = await downloadFile('public/avatars1.jpg');
    if (error) {
        console.log(error);
        return;
    }
    createATag(data, 'default.jpg')
}

const createATag = function (blob: any, name: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
}
</script>

<style scoped></style>