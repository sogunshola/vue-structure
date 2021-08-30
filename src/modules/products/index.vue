<template>
  <div>
    <div class="breadcrumbbar">
      <div class="row align-items-center">
        <div class="col-md-8 col-lg-8">
          <h4 class="page-title">Products</h4>
          <div class="breadcrumb-list">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <!-- <li class="breadcrumb-item"><a href="#">Tables</a></li> -->
              <li class="breadcrumb-item active" aria-current="page">
                Products
              </li>
            </ol>
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="widgetbar">
            <!-- <button class="btn btn-primary" @click.prevent="showForm">
              <i class="ri-add-line mr-2"></i> Add
            </button> -->

            <router-link class="btn btn-primary" :to="{ name: 'AddProduct' }">
              <i class="ri-add-line mr-2"></i> Add
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="contentbar">
      <div v-if="productMeta && productMeta.total" class="row">
        <div class="col-md-4 col-sm-12">
          <div class="card m-b-30">
            <div class="card-body">
              <div class="row align-items-center no-gutters">
                <div class="col-8">
                  <p class="font-15">Total Products</p>
                  <h4 class="card-title mb-0">
                    {{ moneyFormat(productMeta.total) }}
                  </h4>
                </div>
                <div class="col-4 text-right">
                  <span class="iconbar iconbar-md bg-primary text-white rounded"
                    ><i class="ri-arrow-right-up-line align-unset"></i
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-12">
          <div class="card m-b-30">
            <div class="card-body">
              <div class="row align-items-center no-gutters">
                <div class="col-8">
                  <p class="font-15">Total Views</p>
                  <h4 class="card-title mb-0">
                    {{ moneyFormat(productMeta.totalViews) }}
                  </h4>
                </div>
                <div class="col-4 text-right">
                  <span class="iconbar iconbar-md bg-primary text-white rounded"
                    ><i class="ri-eye-line align-unset"></i
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-12">
          <div class="card m-b-30">
            <div class="card-body">
              <div class="row align-items-center no-gutters">
                <div class="col-8">
                  <p class="font-15">Total Value of Products</p>
                  <h4 class="card-title mb-0">
                    <money-format
                      :value="productMeta.totalValue"
                      :locale="'en'"
                      :currency-code="'NGN'"
                      :subunits-value="false"
                      :hide-subunits="true"
                    ></money-format>
                  </h4>
                </div>
                <div class="col-4 text-right">
                  <span class="iconbar iconbar-md bg-primary text-white rounded"
                    ><i class="ri-cash-line align-unset"></i
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col-md-4 col-sm-12">
          <div class="card m-b-30">
            <div class="card-body">
              <div class="row align-items-center no-gutters">
                <div class="col-8">
                  <p class="font-15">Revenue Increase</p>
                  <h4 class="card-title mb-0">5%</h4>
                </div>
                <div class="col-4 text-right">
                  <span class="iconbar iconbar-md bg-primary text-white rounded"
                    ><i class="ri-arrow-right-up-line align-unset"></i
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="card m-b-30">
            <div class="card-header">
              <h6>Products</h6>
            </div>
            <div class="card-body">
              <custom-table
                tableId="activity-levels"
                :headers="headers"
                :data="products"
                :service="service"
                :store="store"
              >
                <template v-slot:images="prop">
                  <div
                    :style="{
                      height: '150px',
                      width: 'auto',
                      'background-image': `url(${prop.images[0]})`,
                      'background-size': 'cover',
                      'background-position': 'center',
                      'background-repeat': 'no-repeat',
                    }"
                  ></div>
                  <!-- <img height="50" :src="prop.images[0].fullPath" alt="" /> -->
                </template>

                <template v-slot:name="prop">
                  <router-link
                    :to="{
                      name: 'Single Product Page',
                      params: { id: prop.id },
                    }"
                    >{{ prop.name }}</router-link
                  >
                </template>

                <template v-slot:price="prop">
                  <span class="tb-sub tb-amount"
                    ><money-format
                      :value="prop.price"
                      :locale="'en'"
                      :currency-code="'NGN'"
                      :subunits-value="false"
                      :hide-subunits="true"
                    ></money-format
                  ></span>
                </template>

                <template v-slot:salePrice="prop">
                  <span class="tb-sub tb-amount"
                    ><money-format
                      :value="prop.salePrice ? prop.salePrice : 0"
                      :locale="'en'"
                      :currency-code="'NGN'"
                      :subunits-value="false"
                      :hide-subunits="true"
                    ></money-format
                  ></span>
                </template>

                <template v-slot:sales="prop">
                  {{ moneyFormat(prop.sales)}}
                  <!-- <span class="tb-sub tb-amount"
                    ><money-format
                      :value="prop.salePrice ? prop.salePrice : 0"
                      :locale="'en'"
                      :currency-code="'NGN'"
                      :subunits-value="false"
                      :hide-subunits="true"
                    ></money-format
                  ></span> -->
                </template>
                <template slot-scope="props">
                  <!-- <router-link
                    class="dropdown-item"
                    :to="'/food-library/' + props.item.id"
                    ><i class="feather icon-eye mr-2"></i>View</router-link
                  > -->
                  <!-- <a class="dropdown-item" @click.prevent="showForm(props.item)"
                    ><i class="feather icon-edit mr-2"></i>Edit</a
                  > -->

                   <router-link
                    :to="{ name: 'Single Product Page', params: { id: props.item.id } }"
                    class="dropdown-item"
                    ><i class="feather icon-eye mr-2"></i>View</router-link
                  >

                  <router-link
                    :to="{ name: 'EditProduct', params: { id: props.item.id } }"
                    class="dropdown-item"
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
import { Constants } from '../../constants';
import { productStore } from './product.store';
import { DataTableMixin } from '@/shared/mixins/datatable.mixin';
import { productService } from './product.service';
@Component
export default class ProductsPage extends mixins(DataTableMixin) {
  formEvent = Constants.productForm;
  service = productService;
  store = productStore;

  get products() {
    return productStore.products;
  }

  get productMeta() {
    return productStore.meta;
  }

  headers = [
    {
      name: 'Image',
      prop: 'images',
    },
    {
      name: 'Name',
      prop: 'name',
    },
    {
      name: 'Price',
      prop: 'price',
    },
    {
      name: 'Sale Price',
      prop: 'salePrice',
    },
    {
      name: 'Quantity',
      prop: 'quantity',
    },
    {
      name: 'Views',
      prop: 'views',
    },
    {
      name: 'Sales',
      prop: 'sales',
    },
    
  ];

  init() {
    // this.remove('jhdhd');
  }
}
</script>

<style scoped></style>
