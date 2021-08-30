<template>
  <div>
    <!-- Start Breadcrumbbar -->
    <div class="breadcrumbbar">
      <div class="row align-items-center">
        <div class="col-md-8 col-lg-8">
          <h4 class="page-title">Add Article</h4>
          <div class="breadcrumb-list">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/app">Dashboard</a></li>
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'Articles' }">Articles</router-link>
              </li>
              <li class="breadcrumb-item"><a>Add Article</a></li>
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
                <div class="form-row">
                  <div class="form-group">
                    <label for="image" class="col-form-label"
                      >Cover Image</label
                    >
                    <input
                      type="file"
                      class="form-control"
                      name="image"
                      @change="handleImageUpload"
                      v-validate="{ required: !payload.imageId }"
                    />
                    <error :data="errors" name="image"></error>
                  </div>

                  <div class="col-md-12">
                    <label for="name" class="col-form-label">Title</label>
                    <input
                      type="text"
                      class="form-control"
                      name="title"
                      v-model="payload.title"
                      v-validate="'required'"
                    />
                    <error :data="errors" name="title"></error>
                  </div>

                  <div class="col-md-12">
                    <label for="name" class="col-form-label">Categories</label>
                    <v-select
                      :options="articleCategories"
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
                    <label for="name" class="col-form-label">Content</label>
                    <ckeditor
                      v-model="payload.body"
                      v-validate="'required'"
                      name="description"
                      id="description"
                    ></ckeditor>
                    <error :data="errors" name="description"></error>
                  </div>

                  <div class="col-md-12">
                    <!-- <label for="name" class="col-form-label">Tags</label>
                    <v-select
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
                @click="save(payload)"
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
import { Component, Vue } from 'vue-property-decorator';
import { FormMixin } from '../../shared/mixins/form.mixin';
import { articlesService } from './articles.service';
import { articlesStore } from './articles.store';
import { articleCategoryStore } from '../article-categories/article-category.store';

@Component
export default class ArticleForm extends mixins(FormMixin) {
  service = articlesService;
  store = articlesStore;

  payload: any = {
    tags: ['test'],
  };

  get articleCategories() {
    return articleCategoryStore.articleCategories;
  }

  async created() {
    const id: string = this.$route.params.id;
    if (id) {
      const response = await articlesService.findOne(id);
      this.payload = response.data;
    }
  }

  popPicture() {
    this.payload.coverImage = null;
  }

  async handleImageUpload(e: any) {
    const file = e.target.files[0];
    this.isLoading = true;

    const response = await this.uploadFile(file);
    this.payload.coverImage = response.url;
    this.isLoading = false;
  }
}
</script>

<style scoped></style>
