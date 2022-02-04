<template>
    <div>
        <confirmation-modal :show="authModelIsOpen" @close="authModelIsOpen = false">
            <template #title>
                Authentication Required
            </template>

            <template #content>
                {{authModelMessage}}
            </template>

            <template #footer>
                <Link :href="route('login')" class="py-1 px-4 mr-4 bg-purple-200 border border-purple-500 rounded shadow">
                    Login
                </Link>
                <Link :href="route('register')" class="py-1 px-4 bg-indigo-200 border border-indigo-500 rounded shadow">
                    Register
                </Link>
            </template>
        </confirmation-modal>
        <slot></slot>
    </div>
</template>
<script>
    import { defineComponent } from 'vue'
    import ConfirmationModal from "@/Jetstream/ConfirmationModal";
    import SecondaryButton from "@/Jetstream/SecondaryButton";
    import DangerButton from "@/Jetstream/DangerButton";

    export default defineComponent({
        components: {DangerButton, SecondaryButton, ConfirmationModal},
        data(){
            return {
                authModelIsOpen: false,
                authModelMessage: '',
            }
        },
        watch: {
            '$page.props.flash': function () {
                this.authModelIsOpen = this.$page.props.flash.requiredAuth != null ? true : false;
                this.authModelMessage = this.$page.props.flash.requiredAuth;
            }
        },
    });
</script>


<!-- Complete Required Auth -->
