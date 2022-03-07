<template>

    <div class="bg-white overflow-hidden shadow sm:rounded-lg p-4">
        <btn-primary>
            Name
        </btn-primary>
        <br>
        <checkbox></checkbox>
        <br>
        <div>
            <jet-input type="text"></jet-input>
        </div>
        <br>
        <nav-link>NavLink</nav-link>

    </div>

</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from "@/Layouts/AppLayout";
    import BtnPrimary from "@/Jetstream/Button";
    import Checkbox from "@/Jetstream/Checkbox";
    import Dropdown from "@/Jetstream/Dropdown";
    import DropdownLink from "@/Jetstream/DropdownLink";
    import FormSection from "@/Jetstream/FormSection";
    import JetInput from "@/Jetstream/Input";
    import inputError from "@/Jetstream/InputError";
    import Label from "@/Jetstream/Label";
    import NavLink from "@/Jetstream/NavLink";


    export default defineComponent({
        layouts: AppLayout,
        components: {
            BtnPrimary,
            Checkbox,
            Dropdown,
            DropdownLink,
            FormSection,
            JetInput,
            inputError,
            Label,
            NavLink,
        },
    })
</script>
