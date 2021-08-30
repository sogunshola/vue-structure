<template>
  <div>
    <div class="breadcrumbbar">
      <div class="row align-items-center">
        <div class="col-md-8 col-lg-8">
          <h4 class="page-title">Articles</h4>
          <div class="breadcrumb-list">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <!-- <li class="breadcrumb-item"><a href="#">Tables</a></li> -->
              <li class="breadcrumb-item active" aria-current="page">
                Articles
              </li>
            </ol>
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="widgetbar">
            <router-link class="btn btn-primary" :to="{ name: 'ArticleForm' }">
              <i class="ri-add-line mr-2"></i> Add
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="contentbar">
      <div class="row">
        <div class="col-lg-12">
          <div class="card m-b-30">
            <div class="card-header">
              <h6>Articles</h6>
            </div>
            <div class="card-body">
              <custom-table
                tableId="activity-levels"
                :headers="headers"
                :data="articles"
                :service="service"
                :store="store"
              >
                <template v-slot:coverImage="prop">
                  <img height="50" :src="prop.coverImage" alt="" />
                </template>
                <template slot-scope="props">
                  <!-- <router-link
                    class="dropdown-item"
                    :to="'/food-library/' + props.item.id"
                    ><i class="feather icon-eye mr-2"></i>View</router-link
                  > -->
                  <router-link
                    class="dropdown-item"
                    :to="{ name: 'EditArticleForm', params: { id: props.item.id } }"
                    ><i class="feather icon-edit mr-2"></i>Edit</router-link
                  >
                </template>
              </custom-table>
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
import { DataTableMixin } from '../../shared/mixins/datatable.mixin';
import { articlesService } from './articles.service';
import { articlesStore } from './articles.store';

@Component
export default class Articles extends mixins(DataTableMixin) {

  service = articlesService;
  store = articlesStore;

  get articles() {
    return articlesStore.articles;
  }

  headers: any[] = [
    {
      name: 'Cover Image',
      prop: 'coverImage',
    },
    {
      name: 'Title',
      prop: 'title',
    },
  ];
}
</script>

<style scoped></style>
