<template>
  <custom-modal :id="modalId" title="Category Form">
    <form action="">
      <div class="form-group">
        <!-- <label for="">Current Images</label> -->
        <div
          v-if="payload.image"
          class="image"
          :style="{
            backgroundImage: 'url(' + payload.image + ')',
            width: '300px',
            height: '200px',
          }"
        >
          <button
            class="btn btn-sm btn-danger ml-3"
            type="button"
            @click.prevent="popPicture"
          >
            <i class="fa fa-trash"></i> Remove
          </button>
        </div>
      </div>
      <div class="form-group">
        <label for="image" class="col-form-label">Category Image</label>
        <input
          type="file"
          class="form-control"
          name="image"
          ref="fileupload"
          @change="handleImageUpload"
          v-validate="{ required: !payload.imageId }"
        />
        <error :data="errors" name="image"></error>
      </div>
      <div class="form-group">
        <label for="name" class="col-form-label">Category Name</label>
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
        <label for="name" class="col-form-label">Category Description</label>
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
      @click="savedata(payload)"
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
import { categoryService } from './category.service';
import { categoryStore } from './category.store';
import { ModalFormMixin } from '@/shared/mixins/modal.mixin';

@Component
export default class CategoryForm extends mixins(ModalFormMixin) {
  formEvent = Constants.categoryForm;
  modalId = 'category-form';
  service = categoryService;
  store = categoryStore;

  private popPicture() {
    // this.payload.image = null;
    this.payload.image = null;
  }

  async handleImageUpload(e: any) {
    const file = e.target.files[0];
    this.isLoading = true;

    const response = await this.uploadFile(file);
    this.payload.image = response.url;
    this.isLoading = false;
  }

  async savedata(payload: any) {
    await this.save(payload);
    const main: any = this;
    main.$refs.fileupload.value = null;
  }
}
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>
