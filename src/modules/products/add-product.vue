<template>
  <div>
    <!-- Start Breadcrumbbar -->
    <div class="breadcrumbbar">
      <div class="row align-items-center">
        <div class="col-md-8 col-lg-8">
          <h4 class="page-title">
            {{ this.isUpdate ? 'Edit' : 'Add' }} Product
          </h4>
          <div class="breadcrumb-list">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/app">Dashboard</a></li>
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'Products Page' }"
                  >Products</router-link
                >
              </li>
              <li class="breadcrumb-item">
                <a>{{ this.isUpdate ? 'Edit' : 'Add' }} Product</a>
              </li>
            </ol>
          </div>
        </div>
        <!-- <div class="col-md-4 col-lg-4">
          <div class="widgetbar">
            <a
              href="#"
              @click.prevent="showForm(product)"
              class="btn btn-primary"
            >
              <i class="ri-edit-line mr-2"></i>Edit
            </a>
          </div>
        </div> -->
      </div>
    </div>
    <div class="contentbar">
      <!-- Start row -->
      <div class="row">
        <!-- Start col -->
        <div class="col-md-12 col-lg-12 col-xl-12">
          <div class="card m-b-30">
            <div class="card-body">
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
                        height: '350px',
                        width: '350px',
                        'background-image': `url(${image})`,
                        'background-size': 'cover',
                        'background-position': 'center',
                        'background-repeat': 'no-repeat',
                        display: 'inline-block',
                      }"
                    >
                      <button
                        class="btn btn-sm btn-danger ml-3"
                        type="button"
                        @click.prevent="popPicture(image)"
                      >
                        <i class="fa fa-trash"></i> Remove
                      </button>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div
                      id="my-strictly-unique-vue-upload-multiple-image"
                      style=""
                    >
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
                    <label for="name" class="col-form-label"
                      >Normal Price(NGN)</label
                    >
                    <currency-input
                      id="price"
                      name="price"
                      class="form-control"
                      v-validate="'required'"
                      v-model="payload.price"
                      @change="handleDiscount"
                    />
                    <error :data="errors" name="price"></error>
                  </div>
                  <div class="col-md-6">
                    <label for="name" class="col-form-label"
                      >Sale Price(NGN)</label
                    >
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

                  <!-- <div class="col-md-12">
                    <label for="name" class="col-form-label"
                      >Sub Categories</label
                    >
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
                  </div> -->

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
                    <label for="name" class="col-form-label"
                      >Short Description</label
                    >
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

                    <input-tags v-model="payload.tags"  v-validate="'required'" validate="text"></input-tags>
                    <!-- <v-select
                      :options="tags"
                      :multiple="true"
                      v-model="payload.tagIds"
                      class="style-chooser"
                      v-validate="'required'"
                      label="name"
                      name="tags"
                      :reduce="(data) => data.id"
                    ></v-select> -->
                    <error :data="errors" name="tags"></error>
                  </div>

                  <!-- <div class="form-row">
          <div class="col"></div>
          <div class="col"></div>
        </div> -->
                </div>
              </form>

              <custom-button
                slot="footer"
                :isLoading="isLoading"
                @click="saveData(payload)"
                :css="'btn btn-lg btn-primary btn-block mt-5'"
              >
                {{ isUpdate ? 'Update' : 'Save' }}
              </custom-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { brandStore } from '../brands/brand.store';
import { categoryStore } from '../categories/category.store';
import { sizeStore } from '../sizes/size.store';
import { subCategoryStore } from '../sub-categories/sub-category.store';
import { tagStore } from '../tags/tag.store';
import { FormMixin } from '@/shared/mixins/form.mixin';
import { productService } from './product.service';
import { productStore } from './product.store';

@Component
export default class AddProduct extends mixins(FormMixin) {
  // isUpdate: boolean = false;
  service = productService;
  store = productStore;

  payload: any = {
    id: '',
    name: '',
    price: 0,
    salePrice: 0,
    description: '',
    shortDescription: '',
    categoryIds: [],
    subCategoryIds: [],
    // imageIds: [],
    brandId: '',
    sizeIds: [],
    // tagIds: [],
    quantity: 0,
    sku: '',
    tags: [],
    images: [],
    categories: [],
    // tags: [],
    sizes: [],
    subCategories: [],
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

  // get tags() {
  //   return tagStore.tags;
  // }

  async created() {
    const id: string = this.$route.params.id;
    if (id) {
      const response = await productService.findOne(id);
      this.payload = response.data;
    }
  }

  async saveData(payload: any) {
    try {
      this.isLoading = true;
      const main: any = this;
      if (!this.isUpdate) {
        payload.images = [];
      }
      const images = main.$refs.myVueDropzone.getAcceptedFiles();
      for (const image of images) {
        const response = await this.uploadFile(image);
        // console.log(response.url);
        payload.images.push(response.url);
      }

      const data = await this.save(payload);

      console.log('data is ', data);
      this.$router.push({
        name: 'Single Product Page',
        params: { id: data.data.id },
      });
      this.payload = {
        id: '',
        name: '',
        price: 0,
        description: '',
        shortDescription: '',
        categoryIds: [],
        subCategoryIds: [],
        // imageIds: [],
        brandId: '',
        sizeIds: [],
        // tagIds: [],
        quantity: 0,
        sku: '',
      };
      main.$refs.myVueDropzone.removeAllFiles();
    } catch (error) {
      this.handleError(error);
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

  dropOptions = {
    url: 'https://www.google.com',
    maxFiles: 10,
    addRemoveLinks: true,
    uploadMultiple: true,
    autoProcessQueue: false,
    dictDefaultMessage: 'Drop image or click to select',
  };

  private popPicture(image: string) {
    const pictures = this.payload.images.filter((item: any) => item != image);
    this.payload.images = pictures;
    // this.payload.imageIds = this.payload.imageIds.filter(
    //   (id: number) => id != imageId
    // );
  }

  // @Watch('payload')
  // handlePayloadChange() {
  //   if (this.isUpdate) {
  //     this.payload.categoryIds = this.payload.categories.map(
  //       (item: any) => item.id
  //     );
  //     this.payload.subCategoryIds = this.payload.subCategories.map(
  //       (item: any) => item.id
  //     );
  //     this.payload.tagIds = this.payload.tags.map((item: any) => item.id);

  //     this.payload.sizeIds = this.payload.sizes.map((item: any) => item.id);
  //     this.payload.imageIds = this.payload.images.map((item: any) => item.id);
  //   }
  // }
}
</script>

<style scoped></style>
