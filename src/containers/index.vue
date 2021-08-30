<template>
  <div class="containerbar">
    <Sidebar></Sidebar>
    <div class="rightbar">
      <Topbar :user="user"></Topbar>
      <router-view :user="user"></router-view>
      <!-- <Footer /> -->
    </div>
    <category-form></category-form>
    <sub-category-form></sub-category-form>
    <brand-form></brand-form>
    <tag-form></tag-form>
    <size-form></size-form>
    <promo-code-form></promo-code-form>
    <product-form></product-form>
    <collection-form></collection-form>
    <delivery-location-form></delivery-location-form>
    <delivery-areas-form></delivery-areas-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
import Footer from '../components/Footer.vue';
import { authenticationStore } from '../modules/authentication/authentication.module';
import { categoryStore } from '../modules/categories/category.store';
import CategoryForm from '../modules/categories/category.form.vue';
import SubCategoryForm from '../modules/sub-categories/sub-category.form.vue';
import BrandForm from '../modules/brands/brand.form.vue';
import TagForm from '../modules/tags/tag.form.vue';
import SizeForm from '../modules/sizes/size.form.vue';
import ProductForm from '../modules/products/product.form.vue';
import PromoCodeForm from '../modules/promo-codes/promo-code.form.vue';
import CollectionForm from '../modules/collections/collection.form.vue';
import DeliveryLocationForm from '../modules/delivery-locations/delivery-location.form.vue';
import DeliveryAreasForm from '../modules/areas/areas.form.vue';
import { subCategoryStore } from '../modules/sub-categories/sub-category.store';
import { brandStore } from '../modules/brands/brand.store';
import { tagStore } from '../modules/tags/tag.store';
import { sizeStore } from '../modules/sizes/size.store';
import { promoCodeStore } from '../modules/promo-codes/promo-code.store';
import { productStore } from '../modules/products/product.store';
import { collectionsStore } from '../modules/collections/collections.store';
import { articlesStore } from '../modules/articles/articles.store';
import { articleCategoryStore } from '../modules/article-categories/article-category.store';
import { ordersStore } from '../modules/orders/orders.store';
import { deliveryLocationsStore } from '../modules/delivery-locations/delivery-locations.store';
import { areasStore } from '../modules/areas/areas.store';
// import { promoCodeStore } from '../modules/promo-codes/promo-code.store';

@Component({
  components: {
    Sidebar,
    Topbar,
    Footer,
    CategoryForm,
    SubCategoryForm,
    BrandForm,
    TagForm,
    SizeForm,
    PromoCodeForm,
    ProductForm,
    CollectionForm,
    DeliveryLocationForm,
    DeliveryAreasForm
  },
})
export default class ProtectedPages extends Vue {
  get user() {
    return authenticationStore.user;
  }

  mounted() {
    categoryStore.getAll();
    subCategoryStore.getAll();
    brandStore.getAll();
    tagStore.getAll();
    sizeStore.getAll();
    promoCodeStore.getAll();
    productStore.getAll();
    collectionsStore.getAll();
    articlesStore.getAll();
    articleCategoryStore.getAll();
    ordersStore.getAll();
    deliveryLocationsStore.getAll();
    areasStore.getAll();
  }
}
</script>

<style scoped></style>
