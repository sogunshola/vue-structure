<template>
  <div>
    <!-- Start Breadcrumbbar -->
    <div class="breadcrumbbar">
      <div class="row align-items-center">
        <div class="col-md-8 col-lg-8">
          <h4 class="page-title">Single Product</h4>
          <div class="breadcrumb-list">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/app">Dashboard</a></li>
              <li class="breadcrumb-item"><a>Product</a></li>
            </ol>
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <div class="widgetbar">
            <router-link
              :to="{ name: 'EditProduct', params: { id: product.id } }"
              class="btn btn-primary"
            >
              <i class="ri-edit-line mr-2"></i>Edit
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- End Breadcrumbbar -->
    <!-- Start Contentbar -->
    <div v-if="product && product.name" class="contentbar">
      <!-- Start row -->
      <div class="row">
        <!-- Start col -->
        <div class="col-md-12 col-lg-12 col-xl-12">
          <div class="card m-b-30">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6 col-xl-5">
                  <div class="product-slider-box product-box-for">
                    <div
                      v-for="(image, i) in product.images"
                      :key="i"
                      class="product-preview"
                    >
                      <img
                        :src="image"
                        class="img-fluid"
                        alt="Product"
                      />
                      <!-- <p>
                        <span class="badge badge-success font-14">25% off</span>
                      </p> -->
                    </div>
                  </div>
                  <div class="product-slider-box product-box-nav">
                    <div
                      v-for="(image, i) in product.images"
                      :key="i"
                      class="product-preview"
                    >
                      <img
                        :src="image"
                        class="img-fluid"
                        alt="Product"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xl-7">
                  <p>
                    <span
                      v-if="product.featured"
                      class="badge badge-primary mr-2 font-16"
                      >Featured Product</span
                    >
                    <span
                      v-if="product.available"
                      class="badge badge-success font-16"
                      >Available</span
                    >
                    <span v-else class="badge badge-danger font-16"
                      >Not Available</span
                    >
                  </p>
                  <div class="">
                    <h2 class="font-22">{{ product.name }}</h2>

                    <div class="row">
                      <div v-if="product.salePrice" class="col">
                        <p class="text-secondary font-20 f-w-7 my-3">
                          <del
                            ><money-format
                              :value="product.price"
                              :locale="'en'"
                              :currency-code="'NGN'"
                              :subunits-value="false"
                              :hide-subunits="true"
                            ></money-format
                          ></del>
                        </p>
                      </div>

                      <div class="col">
                        <p class="text-primary font-20 f-w-7 my-3">
                          <money-format
                            :value="product.priceAfterDiscount"
                            :locale="'en'"
                            :currency-code="'NGN'"
                            :subunits-value="false"
                            :hide-subunits="true"
                          ></money-format>
                        </p>
                      </div>
                    </div>

                    <div v-if="product.discounted">
                      <h6>Discount</h6>
                      <p>{{ product.discount }}%</p>
                    </div>

                    <h6>Views</h6>
                    <p>{{ moneyFormat(product.views) }}</p>

                    <h6>Quantity</h6>
                    <p>{{ moneyFormat(product.quantity) }}</p>

                    <h6>Sizes</h6>
                    <span
                      class="badge badge-info mr-2"
                      v-for="(size, i) in product.sizes"
                      :key="i"
                      >{{ size.name }}</span
                    >
                    <!-- <p>{{ product.sizes }}</p> -->

                    <star-rating
                      :read-only="true"
                      :show-rating="false"
                      :rating="product.rating"
                    ></star-rating>

                    <!-- <h6>Colors</h6>
                    <p>{{ product.colors }}</p> -->

                    <!-- <h6>Status</h6> -->
                    <!-- <p>
                      <span
                        v-if="product.available"
                        class="badge badge-success font-14"
                        >AVAILABLE</span
                      >
                      <span v-else class="badge badge-success font-14"
                        >NOT AVAILABLE</span
                      >
                    </p> -->
                  </div>
                  <!-- <p>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill text-warning"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <span class="ml-2">25 Ratings</span>
                  </p> -->

                  <!-- <p class="mb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p> -->
                  <!-- <div class="custom-radio-button mt-3">
                    <h6>Select Color</h6>
                    <div class="form-check-inline radio-primary">
                      <input
                        type="radio"
                        id="customRadioInline5"
                        name="customRadioInline2"
                        class=""
                        checked
                      />
                      <label for="customRadioInline5"></label>
                    </div>
                    <div class="form-check-inline radio-secondary">
                      <input
                        type="radio"
                        id="customRadioInline6"
                        name="customRadioInline2"
                        class=""
                      />
                      <label for="customRadioInline6"></label>
                    </div>
                    <div class="form-check-inline radio-success">
                      <input
                        type="radio"
                        id="customRadioInline7"
                        name="customRadioInline2"
                        class=""
                      />
                      <label for="customRadioInline7"></label>
                    </div>
                    <div class="form-check-inline radio-danger">
                      <input
                        type="radio"
                        id="customRadioInline8"
                        name="customRadioInline2"
                        class=""
                      />
                      <label for="customRadioInline8"></label>
                    </div>
                    <div class="form-check-inline radio-warning">
                      <input
                        type="radio"
                        id="customRadioInline9"
                        name="customRadioInline2"
                        class=""
                      />
                      <label for="customRadioInline9"></label>
                    </div>
                    <div class="form-check-inline radio-info">
                      <input
                        type="radio"
                        id="customRadioInline10"
                        name="customRadioInline2"
                        class=""
                      />
                      <label for="customRadioInline10"></label>
                    </div>
                    <div class="form-check-inline radio-light">
                      <input
                        type="radio"
                        id="customRadioInline11"
                        name="customRadioInline2"
                        class=""
                      />
                      <label for="customRadioInline11"></label>
                    </div>
                    <div class="form-check-inline radio-dark">
                      <input
                        type="radio"
                        id="customRadioInline12"
                        name="customRadioInline2"
                        class=""
                      />
                      <label for="customRadioInline12"></label>
                    </div>
                  </div>
                  <div class="button-list mt-5 mb-5">
                    <button type="button" class="btn btn-danger font-18">
                      <i class="ri-heart-2-line"></i>
                    </button>
                    <button type="button" class="btn btn-primary font-18">
                      <i class="ri-shopping-cart-line mr-2"></i>Add to Cart
                    </button>
                    <button type="button" class="btn btn-success font-17">
                      Buy Now
                    </button>
                  </div>
                  <div class="button-list">
                    <h6 class="mb-3">Share this product</h6>
                    <a
                      href="#"
                      class="btn btn-primary-rgba rounded-circle font-18"
                      ><i class="ri-facebook-line"></i
                    ></a>
                    <a href="#" class="btn btn-info-rgba rounded-circle font-18"
                      ><i class="ri-twitter-line"></i
                    ></a>
                    <a
                      href="#"
                      class="btn btn-danger-rgba rounded-circle font-18"
                      ><i class="ri-instagram-line"></i
                    ></a>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End col -->
      </div>
      <!-- End row -->
      <!-- Start row -->
      <div class="row">
        <!-- Start col -->
        <div class="col-lg-12">
          <div class="card m-b-30">
            <div class="card-header">
              <h5 class="card-title">Product Details</h5>
            </div>
            <div class="card-body">
              <ul
                class="nav nav-tabs custom-tab-line mb-3"
                id="defaultTabLine"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="description-tab-line"
                    data-toggle="tab"
                    href="#description-line"
                    role="tab"
                    aria-controls="description-line"
                    aria-selected="true"
                    ><i class="ri-file-text-line mr-2"></i>Description</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="review-tab-line"
                    data-toggle="tab"
                    href="#review-line"
                    role="tab"
                    aria-controls="review-line"
                    aria-selected="false"
                    ><i class="ri-star-line mr-2"></i>Review</a
                  >
                </li>
                <!-- <li class="nav-item">
                  <a
                    class="nav-link"
                    id="guide-tab-line"
                    data-toggle="tab"
                    href="#guide-line"
                    role="tab"
                    aria-controls="guide-line"
                    aria-selected="false"
                    ><i class="ri-book-2-line mr-2"></i>Note</a
                  >
                </li> -->
              </ul>
              <div class="tab-content" id="defaultTabContentLine">
                <div
                  class="tab-pane fade show active"
                  id="description-line"
                  role="tabpanel"
                  aria-labelledby="description-tab-line"
                >
                  <p v-html="product.description"></p>
                </div>
                <div
                  class="tab-pane fade"
                  id="review-line"
                  role="tabpanel"
                  aria-labelledby="review-tab-line"
                >
                  <ul class="list-unstyled">
                    <li
                      v-for="(review, i) in product.reviews"
                      :key="i"
                      class="media mb-2"
                    >
                      <!-- <img
                        src="/assets/images/users/men.svg"
                        class="img-fluid mr-3"
                        alt="user"
                      /> -->
                      <div class="media-body">
                        <h5 class="font-16 mt-0 mb-1">
                          {{ review.user.firstName }} {{ review.user.lastName }}
                        </h5>
                        <p class="text-muted font-14">
                          <i class="ri-star-fill text-warning"></i>
                          <i class="ri-star-fill text-warning"></i>
                          <i class="ri-star-fill text-warning"></i>
                          <i class="ri-star-fill text-warning"></i>
                          <i class="ri-star-fill text-warning"></i>
                        </p>
                        <p class="mb-0">
                          {{ review.description }}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- <div
                  class="tab-pane fade"
                  id="guide-line"
                  role="tabpanel"
                  aria-labelledby="guide-tab-line"
                >
                  <p>{{ product.note }}</p>
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <!-- End col -->
      </div>
      <!-- End row -->
    </div>
    <!-- End Contentbar -->
    <loading
      :active="isLoading"
      :is-full-screen="true"
      color="#18A4E1"
      text="Please Wait..."
      size="64"
      :text-style="{}"
      spinner="mini-spinner"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Constants } from '../../constants';
import { productService } from './product.service';
import { productStore } from './product.store';

@Component
export default class SingleProduct extends Vue {
  formEvent = Constants.productForm;
  product: any = {};

  get products() {
    return productStore.products;
  }

  created() {
    this.getProduct();
  }

  async getProduct() {
    const id: string = this.$route.params.id;
    const response = await productService.findOne(id);
    this.product = response.data;
    setTimeout(() => {
      this.init();
    }, 1000);
  }

  init() {
    const $: any = jQuery;
    $(document).ready(function() {
    $('.product-box-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        centerMode: true,
        draggable: false,
        asNavFor: '.product-box-nav',
        focusOnChange: true,
        autoplay: false,
    });
    $('.product-box-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-box-for',
        dots: false,
        arrows: false,
        centerMode: true,
        draggable: false,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2
              }
            }
          ]
    });
});
  }
}
</script>

<style scoped></style>
