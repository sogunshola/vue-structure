<template>
  <!-- Start Leftbar -->
  <div class="leftbar">
    <!-- Start Sidebar -->
    <div class="sidebar">
      <!-- Start Logobar -->
      <div class="logobar">
        <a href="/app" class="logo logo-large">
          <img src="/assets/images/logo.png" class="img-fluid" alt="logo" />
        </a>
        <a href="/app" class="logo logo-small">
          <img src="/assets/images/logo.png" class="img-fluid" alt="logo" />
        </a>
      </div>
      <!-- End Logobar -->
      <!-- Start Navigationbar -->
      <div class="navigationbar">
        <ul class="vertical-menu">
          <li class="vertical-header">Main</li>

          <li>
            <router-link :to="{ name: 'Products Page' }">
              <i class="ri-shopping-bag-2-line"></i>
              <span>Products</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Orders' }">
              <i class="ri-shopping-cart-line"></i>
              <span
                >Orders
                <span class="badge badge-info">{{
                  orderMeta.ordersPending.length
                }}</span></span
              >
              <!-- <i class="ri-arrow-right-s-line"></i> -->
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Articles' }">
              <i class="ri-article-line"></i>
              <span>Articles</span>
              <!-- <i class="ri-arrow-right-s-line"></i> -->
            </router-link>
          </li>

          <!-- <li>
            <router-link :to="{ name: 'Sub Categories Page' }">
              <i class="ri-dashboard-line"></i>
              <span>Sub Categories</span>
            </router-link>
          </li> -->

          <!-- <li>
            <router-link :to="{ name: 'DeliveryLocations' }">
              <i class="ri-qr-code-line"></i>
              <span>Delivery Locations</span>
            </router-link>
          </li> -->

          <li class="vertical-header">Configurations</li>
          <li>
            <router-link :to="{ name: 'Categories Page' }">
              <i class="ri-dashboard-line"></i>
              <span>Product Categories</span>
              <!-- <i class="ri-arrow-right-s-line"></i> -->
            </router-link>
          </li>

          <li>
            <router-link :to="{ name: 'Brands Page' }">
              <i class="ri-dvd-line"></i>
              <span>Brands</span>
            </router-link>
          </li>

          <li>
            <router-link :to="{ name: 'Collections Page' }">
              <i class="ri-folder-2-line"></i>
              <span>Collections</span>
            </router-link>
          </li>

          <!-- <li>
            <router-link :to="{ name: 'Tags Page' }">
              <i class="ri-hashtag"></i>
              <span>Tags</span>
            </router-link>
          </li> -->

          <li>
            <router-link :to="{ name: 'Sizes Page' }">
              <i class="ri-shape-2-line"></i>
              <span>Sizes</span>
            </router-link>
          </li>

          <li>
            <router-link :to="{ name: 'Promo Codes Page' }">
              <i class="ri-qr-code-line"></i>
              <span>Promo Codes</span>
            </router-link>
          </li>

          <li>
            <a href="javaScript:void();">
              <i class="ri-map-pin-2-line"></i>
              <span>Delivery Locations</span>
              <i class="ri-arrow-right-s-line"></i>
            </a>

            <ul class="vertical-submenu">
              <li>
                <router-link :to="{ name: 'DeliveryLocations' }">
                  <!-- <i class="ri-qr-code-line"></i> -->
                  <span>Delivery Countries</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'DeliveryAreas' }">
                  <!-- <i class="ri-qr-code-line"></i> -->
                  <span>Delivery Areas</span>
                </router-link>
              </li>
            </ul>
          </li>

          <!-- <li>
            <router-link :to="{ name: 'Categories Page' }">
              <i class="ri-dashboard-line"></i>
              <span>Categories</span>
            </router-link>
          </li> -->

          <!-- <li>
            <a href="javaScript:void();">
              <i class="fa fa-industry"></i>
              <span>Application Mgmt</span>
              <i class="ri-arrow-right-s-line"></i>
            </a>
            <ul class="vertical-submenu">
              <li>
                <a href="/app/application-management/applications">View Applications</a>
              </li>
            </ul>
          </li> -->
        </ul>
      </div>
      <!-- End Navigationbar -->
    </div>
    <!-- End Sidebar -->
  </div>
  <!-- End Leftbar -->
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator';
import { ordersStore } from '../modules/orders/orders.store';

@Component
export default class Sidebar extends Vue {
  get orderMeta() {
    return ordersStore.meta;
  }

  mounted() {
    const app: Sidebar = this;
    $(document).ready(function() {
      const main: any = window;
      const $: any = main.$;
      $.sidebarMenu($('.vertical-menu'));
      $('#infobar-settings-open').on('click', function(e: any) {
        e.preventDefault();
        $('.infobar-settings-sidebar-overlay').css({
          background: 'rgba(0,0,0,0.4)',
          position: 'fixed',
        });
        $('#infobar-settings-sidebar').addClass('sidebarshow');
      });
      $('#infobar-settings-close').on('click', function(e: any) {
        e.preventDefault();
        $('.infobar-settings-sidebar-overlay').css({
          background: 'transparent',
          position: 'initial',
        });
        $('#infobar-settings-sidebar').removeClass('sidebarshow');
      });
      /* -- Menu Hamburger -- */
      $('.menu-hamburger').on('click', function(e: any) {
        e.preventDefault();
        $('body').toggleClass('toggle-menu');
        $('.menu-hamburger i').toggle();
      });
      /* -- Menu Topbar Hamburger -- */

      $('.topbar-toggle-hamburger').on('click', function(e: any) {
        e.preventDefault();
        $('body').toggleClass('topbar-toggle-menu');
        $('.topbar-toggle-hamburger i').toggle();
      });
      app.mediaSize();
      window.addEventListener('resize', app.mediaSize, false);
    });
  }

  created() {
    this.sidebarInit();
  }

  @Watch('$route')
  handleRouteChange() {
    this.sidebarInit();
  }

  sidebarInit() {
    // $.sidebarMenu($('.vertical-menu'));
    $(function() {
      $('.vertical-menu li').removeClass('active');
      $('.vertical-menu a').removeClass('active');
      for (
        var a = window.location,
          abc = $('.vertical-menu a')
            .filter(function(item: any, value: any) {
              return value.href == a;
            })
            .addClass('active')
            .parent()
            .addClass('active');
        ;

      ) {
        if (!abc.is('li')) break;
        abc = abc
          .parent()
          .addClass('in')
          .parent()
          .addClass('active');
      }
    });
  }

  mediaSize() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      $('body').removeClass('toggle-menu');
      $('.menu-hamburger i.menu-hamburger-close').hide();
      $('.menu-hamburger i.menu-hamburger-collapse').show();
    }
  }
}
</script>

<style scoped></style>
