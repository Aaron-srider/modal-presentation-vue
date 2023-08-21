<template>
    <div class="">
        <el-button @click="openModal">openModal</el-button>
        <modal-presentation ref="modal">
            <template #default>
                <el-button @click="openNestModal">openModal</el-button>
                <modal-presentation ref="nestModal">
                    <template #default></template>
                </modal-presentation>
            </template>
        </modal-presentation>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ModalPresentationView from './ ModalPresentation.vue';
@Component({
    components: {
        ModalPresentation: ModalPresentationView,
    },
})
export default class TestView extends Vue {
    nestModal!: ModalPresentationView;
    modal!: ModalPresentationView;
    mounted() {
        this.nestModal = this.$refs.nestModal as ModalPresentationView;
        this.modal = this.$refs.modal as ModalPresentationView;
        console.log(this.nestModal);
        console.log(this.modal);
    }
    openNestModal() {
        this.nestModal.openModal();
    }
    openModal() {
        this.modal.openModal();
    }
}
</script>
<style lang="scss" scoped></style>
