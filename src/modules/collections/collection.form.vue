<template>
  <custom-modal :id="modalId" title="Collection Form">
    <form action="">
      <div class="form-group">
        <!-- <label for="">Current Images</label> -->
        <div
          v-if="payload.coverImage"
          class="image"
          :style="{
            backgroundImage: 'url(' + payload.coverImage + ')',
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
        <label for="image" class="col-form-label">Collection Image</label>
        <input
          type="file"
          class="form-control"
          name="image"
          ref="fileupload"
          @change="handleImageUpload"
          v-validate="{ required: !payload.coverImage }"
        />
        <error :data="errors" name="image"></error>
      </div>
      <div class="form-group">
        <label for="name" class="col-form-label">Collection Name</label>
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
        <label for="name" class="col-form-label">Collection Description</label>
        <textarea
          class="form-control"
          name="description"
          v-model="payload.description"
          v-validate="'required'"
        ></textarea>
        <error :data="errors" name="description"></error>
      </div>

      <div class="form-group">
        <label for="name" class="col-form-label">Products</label>
        <v-select
          :options="products"
          :multiple="true"
          v-model="payload.productIds"
          class="style-chooser"
          v-validate="'required'"
          label="name"
          name="products"
          :reduce="(data) => data.id"
        ></v-select>
        <error :data="errors" name="products"></error>
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
import { ModalFormMixin } from '@/shared/mixins/modal.mixin';
import { collectionsService } from './collections.service';
import { collectionsStore } from './collections.store';
import { productStore } from '../products/product.store';

@Component
export default class CollectionsForm extends mixins(ModalFormMixin) {
  formEvent = Constants.collectionForm;
  modalId = 'collection-form';
  service = collectionsService;
  store = collectionsStore;

  get products() {
    return productStore.products;
  }

  private popPicture() {
    this.payload.coverImage = null;
    // this.payload.coverImageId = null;
  }

  async handleImageUpload(e: any) {
    try {
      const file = e.target.files[0];
      this.isLoading = true;

      const response = await this.uploadFile(file);
      this.payload.coverImage = response.url;
      this.isLoading = false;
    } catch (error) {
      this.handleError(error);
    }
  }

  async savedata(payload: any) {
    await this.save(payload);
    const main: any = this;
    main.$refs.fileupload.value = null;
  }
}
</script>

<style scoped></style>
