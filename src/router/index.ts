import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ProtectedPages from '@/containers/index.vue';
import { AppGuard } from './router.guard';
Vue.use(VueRouter);

const LoginPage = () => import('@/modules/authentication/pages/login.vue');
const DashboardPage = () => import('@/modules/dashboard/index.vue');
const CategoriesPage = () => import('@/modules/categories/index.vue');
const SubCategoriesPage = () => import('@/modules/sub-categories/index.vue');
const BrandsPage = () => import('@/modules/brands/index.vue');
const TagsPage = () => import('@/modules/tags/index.vue');
const SizesPage = () => import('@/modules/sizes/index.vue');
const ProductsPage = () => import('@/modules/products/index.vue');
// const SingleProductPage = () => import('@/modules/products/single-product.vue');
import SingleProductPage from '@/modules/products/single-product.vue';
const PromoCodesPage = () => import('@/modules/promo-codes/index.vue');
const CollectionsPage = () => import('@/modules/collections/index.vue');
const AddProduct = () => import('@/modules/products/add-product.vue');
const EditProduct = () => import('@/modules/products/edit-product.vue');
const Articles = () => import('@/modules/articles/index.vue');
const ArticleForm = () => import('@/modules/articles/article-form.vue');
const SingleArticle = () => import('@/modules/articles/single-article.vue');
const Orders = () => import('@/modules/orders/index.vue');
const SingleOrder = () => import('@/modules/orders/order.vue');
const DeliveryLocations = () =>
  import('@/modules/delivery-locations/index.vue');
const DeliveryAreas = () => import('@/modules/areas/index.vue');
// const Component = () => import('@/');

const routes: Array<RouteConfig> = [
  { path: '/login', name: 'Login Page', component: LoginPage },
  // { path: '/', name: 'Home', component: Home },
  {
    path: '/',
    component: ProtectedPages,
    beforeEnter: AppGuard,
    children: [
      // { path: '/', name: 'Dashboard Page', component: DashboardPage },
      { path: '/', name: 'Dashboard Page', component: Orders },
      {
        path: '/categories',
        name: 'Categories Page',
        component: CategoriesPage,
      },
      {
        path: '/sub-categories',
        name: 'Sub Categories Page',
        component: SubCategoriesPage,
      },
      {
        path: '/brands',
        name: 'Brands Page',
        component: BrandsPage,
      },
      {
        path: '/tags',
        name: 'Tags Page',
        component: TagsPage,
      },
      {
        path: '/sizes',
        name: 'Sizes Page',
        component: SizesPage,
      },
      {
        path: '/promo-codes',
        name: 'Promo Codes Page',
        component: PromoCodesPage,
      },
      {
        path: '/products',
        name: 'Products Page',
        component: ProductsPage,
      },
      {
        path: '/products/:id',
        name: 'Single Product Page',
        component: SingleProductPage,
      },
      {
        path: '/add-product',
        name: 'AddProduct',
        component: AddProduct,
      },
      {
        path: '/edit-product/:id',
        name: 'EditProduct',
        component: AddProduct,
      },
      {
        path: '/collections',
        name: 'Collections Page',
        component: CollectionsPage,
      },

      {
        path: '/articles',
        name: 'Articles',
        component: Articles,
      },
      {
        path: '/add-article',
        name: 'ArticleForm',
        component: ArticleForm,
      },
      {
        path: '/edit-article/:id',
        name: 'EditArticleForm',
        component: ArticleForm,
      },
      {
        path: '/articles/:id',
        name: 'SingleArticle',
        component: SingleArticle,
      },
      {
        path: '/orders',
        name: 'Orders',
        component: Orders,
      },
      {
        path: '/orders/:id',
        name: 'SingleOrder',
        component: SingleOrder,
      },
      {
        path: '/delivery-locations',
        name: 'DeliveryLocations',
        component: DeliveryLocations,
      },
      {
        path: '/delivery-areas',
        name: 'DeliveryAreas',
        component: DeliveryAreas,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
