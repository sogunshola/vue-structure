<template>
  <div>
    <div class="modal fade" :id="id" role="dialog">
      <div :class="['modal-dialog', customClass]" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">
              {{ title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <button
              slot="footer"
              type="button"
              class="btn btn-secondary text-white"
              data-dismiss="modal"
            >
              Close
            </button>
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
    <loading
      :active="showLoader"
      :is-full-screen="false"
      color="green"
      text="Please wait..."
      size="64"
      :text-style="{}"
      spinner="mini-spinner"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CustomModal extends Vue {
  @Prop() private id!: string;
  @Prop() private title!: string;
  @Prop() customClass!: string;
  @Prop() actionTitle!: string;
  @Prop() action!: Function;
  @Prop() showLoader!: boolean;
}
</script>

<style scoped></style>
