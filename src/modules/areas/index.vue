<template>
  <div>
    <div class="breadcrumbbar">
      <div class="row align-items-center">
        <div class="col-md-8 col-lg-8">
          <h4 class="page-title">Delivery Areas</h4>
          <div class="breadcrumb-list">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <!-- <li class="breadcrumb-item"><a href="#">Tables</a></li> -->
              <li class="breadcrumb-item active" aria-current="page">
                Delivery Areas
              </li>
            </ol>
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="widgetbar">
            <button class="btn btn-primary" @click.prevent="showForm({})">
              <i class="ri-add-line mr-2"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="contentbar">
      <div class="row">
        <div class="col-lg-12">
          <div class="card m-b-30">
            <div class="card-header">
              <h6>Delivery Areas</h6>
            </div>
            <div class="card-body">
              <custom-table
                tableId="activity-levels"
                :headers="headers"
                :data="areas"
                :service="service"
                :store="store"
              >
                <template v-slot:deliveryFee="prop">
                  <span class="tb-sub tb-amount"
                    ><money-format
                      :value="prop.deliveryFee"
                      :locale="'en'"
                      :currency-code="'NGN'"
                      :subunits-value="false"
                      :hide-subunits="true"
                    ></money-format
                  ></span>
                </template>
                <template slot-scope="props">
                  <!-- <router-link
                    class="dropdown-item"
                    :to="'/food-library/' + props.item.id"
                    ><i class="feather icon-eye mr-2"></i>View</router-link
                  > -->
                  <a class="dropdown-item" @click.prevent="showForm(props.item)"
                    ><i class="feather icon-edit mr-2"></i>Edit</a
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
import { DataTableMixin } from '../../shared/mixins/datatable.mixin';
import { areasService } from './areas.service';
import { areasStore } from './areas.store';

@Component
export default class Areas extends mixins(DataTableMixin) {
  formEvent = Constants.areasForm;
  service = areasService;
  store = areasStore;

  get areas() {
    return areasStore.areas;
  }

  headers = [
    {
      name: 'Location Name',
      prop: 'name',
    },
    {
      name: 'Delivery Fee',
      prop: 'deliveryFee',
    },
  ];
}
</script>

<style scoped></style>
