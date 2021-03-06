import Component from 'vue-class-component';
import Vue from 'vue';
import moment from 'moment';
import { helpers } from '../helpers/helper.module';
import {
  GlobalEvent,
  responseHandler,
  showError,
} from '../helpers';
import { apiConfigService } from '../../config/api.config';

@Component
export class GlobalMixins extends Vue {
  isLoading: boolean = false;
  formEvent: string = '';

  public getError(fieldName: any) {
    const app: any = this;
    return app.errors.first(fieldName);
  }

  public async validate() {
    const isValid: boolean = await this.$validator.validateAll();
    if (!isValid) {
      showError('Complete Required Fields');
    }
  }

  public readableDate(date: string) {
    return moment(date).format('DD MMM YYYY');
  }

  public formatDate(date: string, format: string) {
    return moment(date).format(format);
  }

  public handleError(error: any) {
    this.isLoading = false;
    helpers.HIDE_LOADING();
    if (!error.response) {
      return this.toastError(error.message);
    }
    const response = error.response.data;
    console.log('error', response);
    this.toastError(response.message);
  }

  public toastSuccess(message: string) {
    return this.$notify({
      title: message,
      type: 'success',
    });
  }

  public toastError(message: string) {
    return this.$notify({
      title: message,
      type: 'error',
    });
  }

  public modal(modalId: string, show: boolean) {
    const $: any = jQuery;
    show ? $(`#${modalId}`).modal('show') : $(`#${modalId}`).modal('hide');
  }

  public loadJs() {
    let main = document.createElement('script');
    main.setAttribute('src', '/assets/js/core.js');
    main.setAttribute('id', 'main-js');

    try {
      $('#main-js').remove();
      setTimeout(() => {
        document.body.appendChild(main);
      }, 1000);
    } catch (error) {
      document.body.appendChild(main);
    }
  }

  public globalLoader(status: boolean, message?: string) {
    status ? helpers.SHOW_LOADING(message) : helpers.HIDE_LOADING();
  }

  showForm(item: any) {
    GlobalEvent.$emit(this.formEvent, item);
  }

  async uploadFile(file: File) {
    const formdata = new FormData();
    formdata.append('file', file);
    const response = await apiConfigService.request().post('uploads', formdata);
    const output = responseHandler(response);
    return output;
  }

  public moneyFormat(number: number) {
    // console.log('number is', number);
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
