<template>
  <div>
    <!-- Start Breadcrumbbar -->
    <div class="breadcrumbbar">
      <div class="row align-items-center">
        <div class="col-md-8 col-lg-8">
          <h4 class="page-title">Order Detail</h4>
          <div class="breadcrumb-list">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/app">Dasboard</a></li>
              <li class="breadcrumb-item"><a href="/orders">Orders</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                Order Detail
              </li>
            </ol>
          </div>
        </div>
        <!-- <div class="col-md-4 col-lg-4">
          <div class="widgetbar">
            <button class="btn btn-primary">Update Now</button>
          </div>
        </div> -->
      </div>
    </div>
    <!-- End Breadcrumbbar -->
    <!-- Start Contentbar -->
    <div class="contentbar">
      <!-- Start row -->
      <div class="row">
        <!-- Start col -->
        <div class="col-lg-6 col-xl-7">
          <div class="card m-b-30">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-7">
                  <h5 class="card-title mb-0">Order No: {{ order.orderId }}</h5>
                </div>
                <div class="col-5 text-right">
                  Order Status:
                  <span class="badge badge-success"> {{ order.status }}</span>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <div class="order-primary-detail mb-4">
                    <h6>Order Placed</h6>
                    <p class="mb-0">
                      {{ formatDate(order.createdAt, 'DD/MM/yyyy') }} at
                      {{ formatDate(order.createdAt, 'hh:mm a') }}
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <div class="order-primary-detail mb-4">
                    <h6>Name</h6>
                    <p class="mb-0">
                      {{ order.firstName }} {{ order.lastName }}
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <div class="order-primary-detail mb-4">
                    <h6>Email Address</h6>
                    <p class="mb-0">{{ order.email }}</p>
                  </div>
                </div>

                <div class="col-md-6 col-lg-6 col-xl-6">
                  <div class="order-primary-detail mb-4">
                    <h6>Contact No</h6>
                    <p class="mb-0">{{ order.phoneNumber }}</p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <div class="order-primary-detail mb-4">
                    <h6>Country</h6>
                    <p class="mb-0">{{ order.country }}</p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <div class="order-primary-detail mb-4">
                    <h6>State</h6>
                    <p class="mb-0">{{ order.state }}</p>
                  </div>
                </div>
                <div class="col-md-12 col-lg-12 col-xl-12 ">
                  <div class="order-primary-detail mb-4">
                    <h6>
                      Delivery Address
                      <!-- <a href="#" class="badge badge-primary-inverse">Edit</a> -->
                    </h6>
                    <p>
                      {{ order.address }}
                    </p>
                    <!-- <p class="mb-0">+1 123 123 4567</p> -->
                  </div>
                </div>
                <!-- <div class="col-md-6 col-lg-6 col-xl-6 ">
                  <div class="order-primary-detail mb-4">
                    <h6>
                      Billing Address
                      <a href="#" class="badge badge-primary-inverse">Edit</a>
                    </h6>
                    <p>
                      417 Redbud Drive, Manhattan Building,<br />
                      Whitestone, NY.<br />
                      New York-11357
                    </p>
                    <p class="mb-0">+1 123 123 4567</p>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <div class="card m-b-30">
            <div class="card-header">
              <h5 class="card-title">Order Items</h5>
            </div>
            <div class="card-body">
              <div class="table-responsive ">
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <!-- <th scope="col">Action</th> -->
                      <th scope="col">Photo</th>
                      <th scope="col">Product</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Price</th>
                      <th scope="col" class="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, i) in order.items" :key="i">
                      <th scope="row">{{ ++i }}</th>

                      <td>
                        <div
                          class="rounded-circle"
                          :style="{
                            height: '55px',
                            width: '55px',
                            'background-image': `url(${item.item.images[0]})`,
                            'background-size': 'cover',
                            'background-position': 'center',
                            'background-repeat': 'no-repeat',
                          }"
                        ></div>
                        <!-- <img
                          :src="item.item.images[0]"
                          class="img-fluid rounded-circle"
                          width="35"
                          alt="product"
                        /> -->
                      </td>
                      <td>{{ item.item.name }}</td>
                      <td>{{ item.quantity }}</td>
                      <td>
                        <money-format
                          :value="item.price"
                          :locale="'en'"
                          :currency-code="'NGN'"
                          :subunits-value="false"
                          :hide-subunits="true"
                        ></money-format>
                      </td>
                      <td class="text-right">
                        <money-format
                          :value="item.quantity * item.price"
                          :locale="'en'"
                          :currency-code="'NGN'"
                          :subunits-value="false"
                          :hide-subunits="true"
                        ></money-format>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="row border-top pt-3">
                <div class="col-md-12 order-2 order-lg-1 col-lg-4 col-xl-6">
                  <div class="order-note">
                    <!-- <p class="mb-5">
                      <span class="badge badge-secondary-inverse"
                        >Free Shipping Order</span
                      >
                    </p> -->
                    <h6>Note :</h6>
                    <p>
                      {{ order.additionalInfo || 'Not Provided' }}
                    </p>
                  </div>
                </div>
                <div class="col-md-12 order-1 order-lg-2 col-lg-8 col-xl-6">
                  <div class="order-total table-responsive ">
                    <table class="table table-borderless text-right">
                      <tbody>
                        <tr>
                          <td>Sub Total :</td>
                          <td>
                            <money-format
                              :value="order.subTotal"
                              :locale="'en'"
                              :currency-code="'NGN'"
                              :subunits-value="false"
                              :hide-subunits="true"
                            ></money-format>
                          </td>
                        </tr>
                        <tr>
                          <td>Delivery Fee :</td>
                          <td>
                            <money-format
                              :value="order.deliveryFee"
                              :locale="'en'"
                              :currency-code="'NGN'"
                              :subunits-value="false"
                              :hide-subunits="true"
                            ></money-format>
                          </td>
                        </tr>
                        <!-- <tr>
                          <td>Tax(18%) :</td>
                          <td>$180.00</td>
                        </tr> -->
                        <tr>
                          <td class="text-black f-w-7 font-18">Amount :</td>
                          <td class="text-black f-w-7 font-18">
                            <money-format
                              :value="order.total"
                              :locale="'en'"
                              :currency-code="'NGN'"
                              :subunits-value="false"
                              :hide-subunits="true"
                            ></money-format>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer text-right">
              <!-- <button type="button" class="btn btn-primary-rgba my-1">
                <i class="ri-add-line mr-2"></i>Add Product
              </button>
              <button type="button" class="btn btn-success-rgba my-1">
                <i class="ri-repeat-2-line mr-2"></i>Refund
              </button> -->
              <button type="button" class="btn btn-danger-rgba my-1">
                <i class="ri-delete-bin-3-line mr-2"></i>Cancel
              </button>
            </div>
          </div>
          <!-- <div class="card m-b-30">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-7">
                  <h5 class="card-title mb-0">Invoice PDF Details</h5>
                </div>
                <div class="col-5 text-right">
                  <button type="button" class="btn btn-success py-1">
                    <i class="ri-download-2-line mr-2"></i>Invoice
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="order-primary-detail">
                <h6>Current PDF Details</h6>
                <p class="mb-0">Invoice No : #986953</p>
                <p class="mb-0">Seller GST : 24HY87078641Z0</p>
                <p class="mb-0">Purchase GST : 24HG9878961Z1</p>
              </div>
            </div>
          </div> -->
        </div>
        <!-- End col -->
        <!-- Start col -->
        <div class="col-lg-6 col-xl-5">
          <div class="card m-b-30">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-12">
                  <h5 class="card-title mb-0">Change Order Status</h5>
                </div>
              </div>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="">Status</label>
                  <select
                    v-model="payload.status"
                    id="orderCategory"
                    class="form-control"
                  >
                    <!-- <option selected disabled value>Select Type</option> -->
                    <option value="Processing">Processing</option>
                    <option value="On Hold">On-Hold</option>
                    <!-- <option value="Shipped">Shipped</option> -->
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="">Add Special Message</label>
                  <textarea
                    class="form-control"
                    name="specialMessage"
                    id="specialMessage"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  @click.prevent="changeOrderStatus(payload)"
                  type="submit"
                  class="btn btn-primary"
                >
                  <i class="ri-send-plane-line mr-2"></i>Change Status
                </button>
              </form>
            </div>
          </div>
        </div>
        <!-- End col -->
      </div>
      <!-- End row -->
    </div>
    <!-- End Contentbar -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ordersService } from './orders.service';
import { ordersStore } from './orders.store';

@Component
export default class SingleOrder extends Vue {
  payload = {};

  order: any = {};

  // get order() {
  //   return this.orders.find((x) => x.orderId == this.$route.params.id);
  // }

  get orders() {
    return ordersStore.orders;
  }

  created() {
    this.getOrder();
  }

  async getOrder() {
    try {
      const id = this.$route.params.id;
      const response = await ordersService.findOne(id);
      this.order = response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  changeOrderStatus(payload: any) {}
}
</script>

<style scoped></style>
