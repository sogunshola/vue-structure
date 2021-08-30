<template>
  <custom-modal :id="modalId" title="Sub Category Form">
    <form action="">
      <div class="form-group">
        <label for="name" class="col-form-label">Sub Category Name</label>
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
        <label for="name" class="col-form-label"
          >Sub Category Description</label
        >
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
import { ModalFormMixin } from '../../shared/mixins/modal.mixin';
import { subCategoryService } from './sub-category.service';
import { subCategoryStore } from './sub-category.store';

@Component
export default class SubCategoryForm extends mixins(ModalFormMixin) {
  formEvent = Constants.subCategoryForm;
  modalId = 'sub-category-form';
  service = subCategoryService;
  store = subCategoryStore;


  created() {
    // subCategoryService.
  }
}
</script>

<style scoped></style>
