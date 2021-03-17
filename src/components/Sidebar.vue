<template>
  <!-- Start Leftbar -->
  <div class="leftbar">
    <!-- Start Sidebar -->
    <div class="sidebar">
      <!-- Start Logobar -->
      <div class="logobar">
        <a href="/app" class="logo logo-large">
          <img src="/assets/images/logo_bg.png" class="img-fluid" alt="logo" />
        </a>
        <a href="/app" class="logo logo-small">
          <img src="/assets/images/logo_bg.png" class="img-fluid" alt="logo" />
        </a>
      </div>
      <!-- End Logobar -->
      <!-- Start Navigationbar -->
      <div class="navigationbar">
        <ul class="vertical-menu">
          <li class="vertical-header">Main</li>
          <li>
            <a href="/app/pending-lawyers">
              <i class="ri-dashboard-line"></i>
              <span>Pending Lawyers</span>
              <!-- <i class="ri-arrow-right-s-line"></i> -->
            </a>
          </li>

          <li>
            <a href="/app/pending-firms">
              <i class="ri-dashboard-line"></i>
              <span>Pending Firms</span>
              <!-- <i class="ri-arrow-right-s-line"></i> -->
            </a>
          </li>
          <li>
            <a href="/app/manage-expertise">
              <i class="ri-dashboard-line"></i>
              <span>Manage Expertise</span>
              <!-- <i class="ri-arrow-right-s-line"></i> -->
            </a>
          </li>
          <li>
            <a href="/app/manage-topics">
              <i class="ri-dashboard-line"></i>
              <span>Manage Topics</span>
              <!-- <i class="ri-arrow-right-s-line"></i> -->
            </a>
          </li>
          <li>
            <a href="/app/manage-admins">
              <i class="ri-dashboard-line"></i>
              <span>Manage Admins</span>
              <!-- <i class="ri-arrow-right-s-line"></i> -->
            </a>
          </li>

          <li>
            <a href="/app/manage-articles">
              <i class="ri-dashboard-line"></i>
              <span>Manage Articles</span>
              <!-- <i class="ri-arrow-right-s-line"></i> -->
            </a>
          </li>

          <li>
            <a href="/app/manage-requests">
              <i class="ri-dashboard-line"></i>
              <span>Manage Requests</span>
              <!-- <i class="ri-arrow-right-s-line"></i> -->
            </a>
          </li>

          <li>
            <a href="/app/manage-packages">
              <i class="ri-dashboard-line"></i>
              <span>Manage Packages</span>
              <!-- <i class="ri-arrow-right-s-line"></i> -->
            </a>
          </li>

          <li>
            <a href="/app/chats">
              <i class="ri-dashboard-line"></i>
              <span>Chat</span>
              <!-- <i class="ri-arrow-right-s-line"></i> -->
            </a>
          </li>
          <!-- <li class="vertical-header">Control</li> -->

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

@Component
export default class Sidebar extends Vue {
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
