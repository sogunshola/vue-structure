import Component from 'vue-class-component';
import Vue from 'vue';
import moment from 'moment';
import { helpers } from '../helpers/helper.module';
import { showError } from '../helpers';

@Component
export class GlobalMixins extends Vue {
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
    helpers.HIDE_LOADING();
    if (!error.response) {
      return this.$notify({
        // group: 'foo',
        title: 'Error',
        text: error.message,
        type: 'error',
      });
    }
    const response = error.response.data;
    console.log('error', response);
    this.$notify({
      // group: 'foo',
      title: 'Error',
      text: response.message,
      type: 'error',
    });
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
}
