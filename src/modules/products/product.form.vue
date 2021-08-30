<template>
  <custom-modal :id="modalId" title="Product Form" :customClass="['modal-xl']">
    <form action="">
      <div class="form-row">
        <div class="col-md-12">
          <!-- <label for="">Current Images</label> -->
          <div
            class="image"
            v-for="(image, imageIndex) in payload.images"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{
              backgroundImage: 'url(' + image.fullPath + ')',
              width: '300px',
              height: '200px',
            }"
          >
            <button
              class="btn btn-sm btn-danger ml-3"
              type="button"
              @click.prevent="popPicture(image.id)"
            >
              <i class="fa fa-trash"></i> Remove
            </button>
          </div>
        </div>
        <div class="col-md-12">
          <div id="my-strictly-unique-vue-upload-multiple-image" style="">
            <label for="images">Product Images</label>

            <image-upload
              ref="myVueDropzone"
              name="images"
              id="images"
              :options="dropOptions"
            >
            </image-upload>
            <!-- <image-upload
                        popupText="testing"
                        @upload-success="uploadImageSuccess"
                        @before-remove="beforeRemove"
                        @edit-image="editImage"
                        dropText="Drop Image"
                        dragText="Drag Images"
                        name="images"
                        primaryText="Default image"
                        browseText="Browse Images"
                        markIsPrimaryText="Set as default image"
                        v-validate="validations.images"
                      >
                      </image-upload> -->
            <error :data="errors" name="images"></error>
          </div>
        </div>
        <div class="col-md-6">
          <label for="name" class="col-form-label">Name</label>
          <input
            type="text"
            class="form-control"
            name="name"
            v-model="payload.name"
            v-validate="'required'"
          />
          <error :data="errors" name="name"></error>
        </div>

        <div class="col-md-6">
          <label for="name" class="col-form-label">Normal Price(NGN)</label>
          <currency-input
            id="price"
            name="price"
            class="form-control"
            v-validate="'required'"
            v-model="payload.price"
            @change="handleDiscount"
          />
          <!-- <input
            type="text"
            class="form-control"
            name="name"
            v-model="payload.name"
            v-validate="'required'"
          /> -->
          <error :data="errors" name="price"></error>
        </div>
        <div class="col-md-6">
          <label for="name" class="col-form-label">Sale Price(NGN)</label>
          <currency-input
            id="salePrice"
            name="salePrice"
            class="form-control"
            v-model="payload.salePrice"
            @change="handleDiscount"
          />
          <!-- <input
            type="text"
            class="form-control"
            name="name"
            v-model="payload.name"
            v-validate="'required'"
          /> -->
          <error :data="errors" name="salePrice"></error>
        </div>

        <div class="col-md-6">
          <label for="name" class="col-form-label">Discount(%)</label>
          <input
            id="discount"
            type="number"
            name="discount"
            class="form-control"
            disabled
            v-model="payload.discount"
          />
          <!-- <input
            type="text"
            class="form-control"
            name="name"
            v-model="payload.name"
            v-validate="'required'"
          /> -->
          <error :data="errors" name="salePrice"></error>
        </div>

        <div class="col-md-12">
          <label for="name" class="col-form-label">Categories</label>
          <v-select
            :options="categories"
            :multiple="true"
            v-model="payload.categoryIds"
            class="style-chooser"
            v-validate="'required'"
            label="name"
            name="categories"
            :reduce="(data) => data.id"
          ></v-select>
          <error :data="errors" name="categories"></error>
        </div>

        <div class="col-md-12">
          <label for="name" class="col-form-label">Sub Categories</label>
          <v-select
            :options="subCategories"
            :multiple="true"
            v-model="payload.subCategoryIds"
            class="style-chooser"
            v-validate="'required'"
            label="name"
            name="sub categories"
            :reduce="(data) => data.id"
          ></v-select>
          <error :data="errors" name="sub categories"></error>
        </div>

        <div class="col-md-12">
          <label for="name" class="col-form-label">Sizes</label>
          <v-select
            :options="sizes"
            :multiple="true"
            v-model="payload.sizeIds"
            class="style-chooser"
            v-validate="'required'"
            label="name"
            name="sizes"
            :reduce="(data) => data.id"
          ></v-select>
          <error :data="errors" name="sizes"></error>
        </div>

        <div class="col-md-12">
          <label for="name" class="col-form-label">Brand</label>
          <v-select
            :options="brands"
            v-model="payload.brandId"
            class="style-chooser"
            v-validate="'required'"
            label="name"
            name="brand"
            :reduce="(data) => data.id"
          ></v-select>
          <error :data="errors" name="brand"></error>
        </div>

        <div class="col-md-6">
          <label for="name" class="col-form-label">Quantity</label>
          <input
            type="number"
            class="form-control"
            name="quantity"
            v-model="payload.quantity"
            v-validate="'required'"
          />
          <error :data="errors" name="quantity"></error>
        </div>

        <div class="col-md-6">
          <label for="name" class="col-form-label">SKU</label>
          <input
            type="number"
            class="form-control"
            name="sku"
            v-model="payload.sku"
            v-validate="'required'"
          />
          <error :data="errors" name="sku"></error>
        </div>

        <div class="col-md-12">
          <label for="name" class="col-form-label">Short Description</label>
          <textarea
            class="form-control"
            name="short description"
            v-model="payload.shortDescription"
            v-validate="'required'"
          ></textarea>
          <error :data="errors" name="short description"></error>
        </div>

        <div class="col-md-12">
          <label for="name" class="col-form-label">Description</label>
          <!-- <textarea
            class="form-control"
            name="description"
            v-model="payload.description"
            v-validate="'required'"
          ></textarea> -->
          <ckeditor
            v-model="payload.description"
            v-validate="'required'"
            name="description"
            id="description"
          ></ckeditor>
          <error :data="errors" name="description"></error>
        </div>

        <div class="col-md-12">
          <label for="name" class="col-form-label">Tags</label>
          <v-select
            :options="tags"
            :multiple="true"
            v-model="payload.tagIds"
            class="style-chooser"
            v-validate="'required'"
            label="name"
            name="tags"
            :reduce="(data) => data.id"
          ></v-select>
          <error :data="errors" name="tags"></error>
        </div>

        <!-- <div class="form-row">
          <div class="col"></div>
          <div class="col"></div>
        </div> -->
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
      @click="saveData(payload)"
      :css="'btn btn-lg btn-primary btn-block'"
    >
      {{ isUpdate ? 'Update' : 'Save' }}
    </custom-button>
  </custom-modal>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Constants } from '../../constants';
import { productService } from './product.service';
import { productStore } from './product.store';
import { ModalFormMixin } from '@/shared/mixins/modal.mixin';
import { categoryStore } from '../categories/category.store';
import { subCategoryStore } from '../sub-categories/sub-category.store';
import { brandStore } from '../brands/brand.store';
import { sizeStore } from '../sizes/size.store';
import { tagStore } from '../tags/tag.store';

@Component
export default class ProductForm extends mixins(ModalFormMixin) {
  formEvent = Constants.productForm;
  modalId = 'product-form';
  service = productService;
  store = productStore;

  @Watch('payload')
  handlePayloadChange() {
    if (this.isUpdate) {
      this.payload.categoryIds = this.payload.categories.map(
        (item: any) => item.id
      );
      this.payload.subCategoryIds = this.payload.subCategories.map(
        (item: any) => item.id
      );
      this.payload.tagIds = this.payload.tags.map((item: any) => item.id);

      this.payload.sizeIds = this.payload.sizes.map((item: any) => item.id);
      this.payload.imageIds = this.payload.images.map((item: any) => item.id);
    }
  }

  handleDiscount() {
    const discount =
      ((Number(this.payload.price) - Number(this.payload.salePrice)) /
        Number(this.payload.price)) *
      100;
    console.log('calculating discount', discount);
    this.payload.discount = discount;
  }

  constructor() {
    super();
  }

  payload: any = {
    id: '',
    name: '',
    price: 0,
    description: '',
    shortDescription: '',
    categoryIds: [],
    subCategoryIds: [],
    imageIds: [],
    brandId: '',
    sizeIds: [],
    tagIds: [],
    quantity: 0,
    sku: '',
    images: [],
    categories: [],
    tags: [],
    sizes: [],
    subCategories: [],
  };

  dropOptions = {
    url: 'https://www.google.com',
    maxFiles: 10,
    addRemoveLinks: true,
    uploadMultiple: true,
    autoProcessQueue: false,
    dictDefaultMessage: 'Drop image or click to select',
  };

  get categories() {
    return categoryStore.categories;
  }

  get subCategories() {
    return subCategoryStore.subCategories;
  }

  get brands() {
    return brandStore.brands;
  }

  get sizes() {
    return sizeStore.sizes;
  }

  get tags() {
    return tagStore.tags;
  }

  private popPicture(imageId: number) {
    const pictures = this.payload.images.filter(
      (item: any) => item.id != imageId
    );
    this.payload.images = pictures;
    this.payload.imageIds = this.payload.imageIds.filter(
      (id: number) => id != imageId
    );
  }

  async saveData(payload: any) {
    try {
      this.isLoading = true;
      const main: any = this;
      if (!this.isUpdate) {
        payload.imageIds = [];
      }
      const images = main.$refs.myVueDropzone.getAcceptedFiles();
      for (const image of images) {
        const response = await this.uploadFile(image);
        payload.imageIds.push(response.data.id);
      }

      await this.save(payload);
      // this.payload = {
      //   id: '',
      //   name: '',
      //   price: 0,
      //   description: '',
      //   shortDescription: '',
      //   categoryIds: [],
      //   subCategoryIds: [],
      //   imageIds: [],
      //   brandId: '',
      //   sizeIds: [],
      //   tagIds: [],
      //   quantity: 0,
      //   sku: '',
      // };
      main.$refs.myVueDropzone.removeAllFiles();
    } catch (error) {
      this.handleError(error);
    }
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
