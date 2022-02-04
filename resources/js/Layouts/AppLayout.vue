<template>
    <div class="bg-gray-200 flex h-screen">
        <div class="w-72 p-2">
            <side-bar />
        </div>
        <div class="w-full p-2">
            <navbar class="col-span-12 bg-gray-200 p-5"/>
            <main >
                <slot></slot>
            </main>
        </div>
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

