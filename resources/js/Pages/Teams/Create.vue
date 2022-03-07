<template>
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <create-team-form />
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import CreateTeamForm from '@/Pages/Teams/Partials/CreateTeamForm.vue'

    export default defineComponent({
        layout: AppLayout,
        components: {
            CreateTeamForm,
        },
    })
</script>
