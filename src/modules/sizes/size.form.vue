<template>
  <custom-modal :id="modalId" title="Size Form">
    <form action="">
      <div class="form-group">
        <label for="name" class="col-form-label">Size Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          v-model="payload.name"
          v-validate="'required'"
        />
        <error :data="errors" name="name"></error>
      </div>

      <div class="form-group">
        <label for="name" class="col-form-label">Size Description</label>
        <textarea
          class="form-control"
          name="description"
          v-model="payload.description"
          v-validate="'required'"
        ></textarea>
        <error :data="errors" name="description"></error>
      </div>
    </form>
    <!-- <button
      slot="footer"
      @click.prevent="save(payload)"
      type="button"
      class="btn btn-primary text-white"
    >
      Save
    </button> -->
    <custom-button
      slot="footer"
      :isLoading="isLoading"
      @click="save(payload)"
      :css="'btn btn-lg btn-primary btn-block'"
    >
      {{ isUpdate ? 'Update' : 'Save' }}
    </custom-button>
  </custom-modal>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import { Component, Vue } from 'vue-property-decorator';
import { Constants } from '../../constants';
import { sizeService } from './size.service';
import { sizeStore } from './size.store';
import { ModalFormMixin } from '@/shared/mixins/modal.mixin';

@Component
export default class SizeForm extends mixins(ModalFormMixin) {
  formEvent = Constants.sizeForm;
  modalId = 'size-form';
  service = sizeService;
  store = sizeStore;
}
</script>

<style scoped></style>
