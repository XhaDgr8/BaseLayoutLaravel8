<template>
    <div class="holder">
        <side-bar />
        <navbar />
        <main class="mt-28 left-area">
            <slot></slot>
        </main>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import Navbar from "@/Components/Navbar";
import SideBar from "@/Components/SideBar";

export default defineComponent({
    components: {
        Navbar,
        SideBar
    },
})
</script>
<style scoped>
    .holder {
        @apply bg-gray-200 flex min-h-screen;
    }
</style>

