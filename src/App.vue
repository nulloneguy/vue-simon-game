<script setup></script>

<template>
    <nav class="relative flex items-center justify-center capitalize text-lg pt-6">
        <router-link class="inline pr-5" to="/" active-class="active">Home</router-link>
        <router-link class="inline" to="/about" active-class="active">About</router-link>
    </nav>
    <router-view class="p-12"></router-view>
</template>

<style lang="scss">
#app {
    @apply h-screen bg-gray-50;
}

nav {
    a.active {
        &::after {
            @apply block w-full bg-green-500;
            content: '';
           height: 1.5px;
            }
    }
}
</style>
