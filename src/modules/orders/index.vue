<template>
  <div>
    <div class="breadcrumbbar">
      <div class="row align-items-center">
        <div class="col-md-8 col-lg-8">
          <h4 class="page-title">Orders</h4>
          <div class="breadcrumb-list">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/app">Home</a>
              </li>
              <li class="breadcrumb-item">
                <p>Orders</p>
              </li>
              <!-- <li class="breadcrumb-item active" aria-current="page">Housing Properties</li> -->
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div v-if="orderMeta && orderMeta.ordersToday" class="contentbar">
      <div class="row">
        <div class="col-md-6 col-lg-4 col-sm-12">
          <div class="card m-b-30">
            <div class="card-body">
              <div class="row align-items-center no-gutters">
                <div class="col-8">
                  <p class="font-15">Orders Today</p>
                  <h4 class="card-title mb-0 font-16">
                    {{ orderMeta.ordersToday.length }}
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

        <div class="col-md-6 col-lg-4 col-sm-12">
          <div class="card m-b-30">
            <div class="card-body">
              <div class="row align-items-center no-gutters">
                <div class="col-8">
                  <p class="font-15">Orders Revenue Today</p>
                  <h4 class="card-title mb-0 font-16">
                    <money-format
                      :value="orderMeta.revenueToday"
                      :locale="'en'"
                      :currency-code="'NGN'"
                      :subunits-value="false"
                      :hide-subunits="true"
                    ></money-format>
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

        <div class="col-md-6 col-lg-4 col-sm-12">
          <div class="card m-b-30">
            <div class="card-body">
              <div class="row align-items-center no-gutters">
                <div class="col-8">
                  <p class="font-15">Pending Orders</p>
                  <h4 class="card-title mb-0 font-16">
                    {{ orderMeta.ordersPending.length }}
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
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4 col-sm-12">
          <div class="card m-b-30">
            <div class="card-body">
              <div class="row align-items-center no-gutters">
                <div class="col-8">
                  <p class="font-15">Total Orders</p>
                  <h4 class="card-title mb-0 font-16">
                    {{ orderMeta.total }}
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

        <div class="col-md-6 col-lg-4 col-sm-12">
          <div class="card m-b-30">
            <div class="card-body">
              <div class="row align-items-center no-gutters">
                <div class="col-8">
                  <p class="font-15">Total Orders Revenue</p>
                  <h4 class="card-title mb-0 font-16">
                    <money-format
                      :value="orderMeta.revenue"
                      :locale="'en'"
                      :currency-code="'NGN'"
                      :subunits-value="false"
                      :hide-subunits="true"
                    ></money-format>
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

        <!-- <div class="col-md-6 col-lg-4 col-sm-12">
          <div class="card m-b-30">
            <div class="card-body">
              <div class="row align-items-center no-gutters">
                <div class="col-8">
                  <p class="font-15">Pending Orders</p>
                  <h4 class="card-title mb-0 font-16">
                    
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
        </div> -->
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="card m-b-30">
            <div class="card-body">
              <div class="table-responsive">
                <table id="orders" class="table table-borderless">
                  <thead>
                    <tr>
                      <th style="width: 10px">S/N</th>
                      <th>Order ID</th>
                      <!-- <th>User</th> -->
                      <th>Total</th>
                      <th>Status</th>
                      <th>Date</th>
                      <!-- <th style="width: 10px">Actions</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(order, i) in orders" :key="i">
                      <td>{{ ++i }}</td>
                      <td>
                        <router-link
                          :to="{
                            name: 'SingleOrder',
                            params: { id: order.orderId },
                          }"
                          >{{ order.orderId }}</router-link
                        >
                      </td>
                      <!-- <td>
                        {{ order.user.firstname }} {{ order.user.lastname }}
                      </td> -->
                      <td>
                        <money-format
                          :value="order.total"
                          :locale="'en'"
                          :currency-code="'NGN'"
                          :subunits-value="false"
                          :hide-subunits="true"
                        ></money-format>
                      </td>
                      <td>{{ order.status }}</td>
                      <td>{{ readableDate(order.createdAt) }}</td>
                      <!-- <td></td> -->
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th style="width: 10px">S/N</th>
                      <th>Order ID</th>
                      <!-- <th>User</th> -->
                      <th>Total</th>
                      <th>Status</th>
                      <th>Date</th>
                      <!-- <th style="width: 10px">Actions</th> -->
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { ordersStore } from './orders.store';

@Component
export default class Orders extends Vue {
  get orders() {
    return ordersStore.orders;
  }

  get orderMeta() {
    return ordersStore.meta;
  }

  @Watch('orders')
  handler() {
    this.init();
  }

  created() {
    this.init();
  }

  init() {
    const $: any = jQuery;
    $(`#orders`)
      .DataTable()
      .destroy();
    setTimeout(() => {
      $(`#orders`).DataTable();
    }, 1000);
  }
}
</script>

<style scoped></style>
