import Component from 'vue-class-component';
import Vue from 'vue';
import { GlobalEvent } from '../helpers';

@Component
export class ModalFormMixin extends Vue {
  payload: any = {
    id: '',
    name: '',
    description: '',
  };
  modalId: string = '';
  service: any;
  store: any;

  get isUpdate() {
    if (this.payload.id) return true;
    return false;
  }

  mounted() {
    GlobalEvent.$on(this.formEvent, (data: any) => {
      this.payload = data;
      this.modal(this.modalId, true);
    });
  }

  async save(payload: any) {
    try {
      await this.validate();
      // this.globalLoader(true);
      this.isLoading = true;
      const response = this.isUpdate
        ? await this.service.update(payload)
        : await this.service.create(payload);
      this.payload = { ...this.payload, ...response.data };
      this.toastSuccess(response.message);
      // this.globalLoader(false);
      this.isLoading = false;
      this.store.getAll();
    } catch (error) {
      this.handleError(error);
    }
  }
}
