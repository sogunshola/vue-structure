<template>
  <div id="containerbar" class="containerbar">
    <!-- Start Container -->
    <div class="container">
      <div class="auth-box login-box">
        <!-- Start row -->
        <div class="row no-gutters align-items-center justify-content-center">
          <!-- Start col -->
          <div class="col-md-6 col-lg-5">
            <!-- Start Auth Box -->
            <div class="auth-box-right">
              <div class="card">
                <div class="card-body">
                  <form @submit.prevent="login(payload)" action="#">
                    <div class="form-head">
                      <a href="/" class="logo"
                        ><img
                          src="/assets/images/logo_bg.png"
                          class="img-fluid"
                          alt="logo"
                      /></a>
                    </div>
                    <h4 class="text-primary my-4">Log in</h4>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        v-validate="'required|email'"
                        v-model="payload.email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                      <error :data="errors" name="email"></error>
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        v-validate="'required'"
                        v-model="payload.password"
                        name="password"
                        id="password"
                        placeholder="Password"
                      />
                      <error :data="errors" name="password"></error>
                    </div>
                    <!-- <div class="form-row mb-3">
                      <div class="col-sm-6">
                        <div class="custom-control custom-checkbox text-left">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="rememberme"
                          />
                          <label
                            class="custom-control-label font-14"
                            for="rememberme"
                            >Remember Me</label
                          >
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="forgot-psw">
                          <a
                            id="forgot-psw"
                            href="user-forgotpsw.html"
                            class="font-14"
                            >Forgot Password?</a
                          >
                        </div>
                      </div>
                    </div> -->
                    <button
                      @click.prevent="login(payload)"
                      type="submit"
                      class="btn btn-success btn-lg btn-block font-18"
                    >
                      Log in
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <!-- End Auth Box -->
          </div>
          <!-- End col -->
        </div>
        <!-- End row -->
      </div>
      <loading
        :active="isLoading"
        :is-full-screen="true"
        color="green"
        text="Please wait..."
        size="64"
        :text-style="{}"
        spinner="mini-spinner"
      />
    </div>
    <!-- End Container -->
  </div>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import { Component, Vue } from 'vue-property-decorator';
import { LoginUser } from './authentication.api';
import { UserLoginDTO } from './authentication.model';
import { authenticationStore } from './authentication.module';

@Component
export default class Login extends Vue {
  payload: UserLoginDTO | {} = {};
  isLoading: boolean = false;

  async login(payload: UserLoginDTO) {
    try {
      await this.validate();
      this.isLoading = true;
      await authenticationStore.Login(payload);
      this.$router.push('/');
      this.toastSuccess('Login Success');
    } catch (error) {
      this.isLoading = false;
      this.handleError(error);
    }
  }
}
</script>

<style scoped></style>
