<template>
    <div class="loginBox">
        <h1>login</h1>
    </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, onMounted } from 'vue'
let { proxy }: any = getCurrentInstance()
const testVal = async () => {
    let { data: res } = await proxy.$http.get('menu/list')
    console.log('结果', res)
}

onMounted(() => {
    testVal()
})
</script>

<style lang="less" scoped>
.loginBox {
    width: 100%;
    height: 100%;
    background: url('../assets/background.png') no-repeat;
    background-size: cover;
}
</style>
