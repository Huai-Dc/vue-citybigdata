<template>
    <section class="main-content">
        <router-view></router-view>
    </section>
</template>

<script>
    export default {
        name: "main-content"
    }
</script>

<style scoped>
.main-content{
    min-height: 100%;
}
</style>