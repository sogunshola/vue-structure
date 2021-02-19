<template>
  <div>
    <div class="topbar-mobile">
      <div class="row align-items-center">
        <div class="col-md-12">
          <div class="mobile-logobar">
            <a href="index.html" class="mobile-logo"
              ><img src="assets/images/logo.png" class="img-fluid" alt="logo"
            /></a>
          </div>
          <div class="mobile-togglebar">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <div class="topbar-toggle-icon">
                  <a class="topbar-toggle-hamburger" href="javascript:void();">
                    <span class="iconbar">
                      <i class="ri-more-fill menu-hamburger-horizontal"></i>
                      <i class="ri-more-2-fill menu-hamburger-vertical"></i>
                    </span>
                  </a>
                </div>
              </li>
              <li class="list-inline-item">
                <div class="menubar">
                  <a class="menu-hamburger" href="javascript:void();">
                    <span class="iconbar">
                      <i class="ri-menu-2-line menu-hamburger-collapse"></i>
                      <i class="ri-close-line menu-hamburger-close"></i>
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="topbar">
      <!-- Start row -->
      <div class="row align-items-center">
        <!-- Start col -->
        <div class="col-md-12 align-self-center">
          <div class="togglebar">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <div class="menubar">
                  <a class="menu-hamburger" href="javascript:void();">
                    <span class="iconbar">
                      <i class="ri-menu-2-line menu-hamburger-collapse"></i
                      ><i class="ri-close-line menu-hamburger-close"></i>
                    </span>
                  </a>
                </div>
              </li>
              <li class="list-inline-item">
                <div class="searchbar">
                  <form>
                    <div class="input-group">
                      <input
                        type="search"
                        class="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                      />
                      <div class="input-group-append">
                        <button class="btn" type="submit" id="button-addon2">
                          <i class="ri-search-line"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </div>
          <div class="infobar">
            <ul class="list-inline mb-0">
              <!-- <li class="list-inline-item">
                <div class="notifybar">
                  <div class="dropdown">
                    <a
                      class="dropdown-toggle infobar-icon"
                      href="#"
                      role="button"
                      id="notoficationlink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="iconbar"
                        ><i class="ri-notification-3-line"></i
                        ><span class="live-icon"></span
                      ></span>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="notoficationlink"
                    >
                      <div class="notification-dropdown-title">
                        <h5>Notifications<a href="#">Clear all</a></h5>
                      </div>
                      <ul class="list-unstyled">
                        <li class="media dropdown-item">
                          <span class="action-icon badge badge-primary"
                            ><i class="ri-archive-line"></i
                          ></span>
                          <div class="media-body">
                            <h5 class="action-title">Product Added</h5>
                            <p><span class="timing">Today, 08:40 AM</span></p>
                          </div>
                        </li>
                        <li class="media dropdown-item">
                          <span class="action-icon badge badge-success"
                            ><i class="ri-price-tag-3-line"></i
                          ></span>
                          <div class="media-body">
                            <h5 class="action-title">Sale Started</h5>
                            <p><span class="timing">Today, 03:45 PM</span></p>
                          </div>
                        </li>
                        <li class="media dropdown-item">
                          <span class="action-icon badge badge-warning"
                            ><i class="ri-file-text-line"></i
                          ></span>
                          <div class="media-body">
                            <h5 class="action-title">Kelly Reported</h5>
                            <p>
                              <span class="timing">5 June 2020, 02:20 PM</span>
                            </p>
                          </div>
                        </li>
                        <li class="media dropdown-item">
                          <span class="action-icon badge badge-danger"
                            ><i class="ri-file-user-line"></i
                          ></span>
                          <div class="media-body">
                            <h5 class="action-title">John Resigned</h5>
                            <p>
                              <span class="timing">2 June 2020, 11:11 AM</span>
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div class="notification-dropdown-footer">
                        <h5><a href="#">See all</a></h5>
                      </div>
                    </div>
                  </div>
                </div>
              </li> -->
              <li class="list-inline-item">
                <div class="profilebar">
                  <div class="dropdown">
                    <a
                      class="dropdown-toggle"
                      href="#"
                      role="button"
                      id="profilelink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      ><img
                        :src="user.avatar.fullPath"
                        class="img-fluid rounded-circle"
                        alt="profile"
                      />
                      <span class="live-icon"
                        >{{ user.firstName }} {{ user.lastName }}</span
                      >
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="profilelink"
                    >
                      <!-- <a class="dropdown-item" href="#"
                        ><i class="ri-user-6-line"></i>My Profile</a
                      >
                      <a class="dropdown-item" href="#"
                        ><i class="ri-settings-3-line"></i>Settings</a
                      > -->
                      <a
                        class="dropdown-item text-danger"
                        @click.prevent="logout"
                        href="#"
                        ><i class="ri-shut-down-line"></i>Logout</a
                      >
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <loading
            :active="isLoading"
            :is-full-screen="true"
            color="green"
            text="Logging out..."
            size="64"
            :text-style="{}"
            spinner="mini-spinner"
          />
        </div>
        <!-- End col -->
      </div>
      <!-- End row -->
    </div>
  </div>
</template>

<script lang="ts">
import { authenticationStore } from '@/modules/authentication/authentication.module';
import { Component, Vue, Prop } from 'vue-property-decorator';
// import { UserModel } from '../modules/authentication/auth.model';
// import { Logout } from '../modules/authentication/auth.api';

@Component
export default class Topbar extends Vue {
  @Prop() private user!: any;
  private isLoading: boolean = false;

  // private logout() {
  //   this.isLoading = true;
  //   localStorage.clear();
  //   setTimeout(() => {
  //     this.$router.push('/login');
  //     this.isLoading = false;
  //   }, 3000);
  // }

  private logout() {
    this.isLoading = true;
    setTimeout(() => {
      authenticationStore.LOGOUT();
      this.$router.push('/login');
      this.isLoading = false;
    }, 3000);
  }
  // private async logout() {
  //   this.isLoading = true;
  //   await Logout().then((response) => {
  //     localStorage.removeItem("token");
  //     this.isLoading = false;
  //     this.$router.push("/login");
  //   }).catch((error) => {
  //     this.$toast.error(error.message);
  //     this.isLoading = false;
  //   })
  // }
}
</script>

<style scoped></style>
