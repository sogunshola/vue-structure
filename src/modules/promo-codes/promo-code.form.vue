<template>
  <custom-modal :id="modalId" title="Promo Code Form">
    <form action="">
      <div class="form-group">
        <label for="name" class="col-form-label">Promo Code</label>
        <input
          type="text"
          class="form-control"
          name="code"
          v-model="payload.code"
          v-validate="'required'"
        />
        <error :data="errors" name="code"></error>
      </div>

      <div class="form-group">
        <label for="name" class="col-form-label">Discount</label>
        <input
          type="number"
          class="form-control"
          name="discount"
          v-model="payload.discount"
          v-validate="'required'"
        />
        <error :data="errors" name="discount"></error>
      </div>

      <div class="form-group">
        <label for="name" class="col-form-label">Slots</label>
        <input
          type="number"
          class="form-control"
          name="slots"
          v-model="payload.slots"
          v-validate="'required'"
        />
        <error :data="errors" name="slots"></error>
      </div>
    </form>
    <!-- <button
      slot="footer"
      @click.prevent="save(payload)"
      type="button"
      class="btn btn-primary text-white"
    >
      Save
    </button> -->
    <custom-button
      slot="footer"
      :isLoading="isLoading"
      @click="save(payload)"
      :css="'btn btn-lg btn-primary btn-block'"
    >
      {{ isUpdate ? 'Update' : 'Save' }}
    </custom-button>
  </custom-modal>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import { Component, Vue } from 'vue-property-decorator';
import { Constants } from '../../constants';
import { promoCodeService } from './promo-code.service';
import { promoCodeStore } from './promo-code.store';
import { ModalFormMixin } from '@/shared/mixins/modal.mixin';

@Component
export default class PromoCodeForm extends mixins(ModalFormMixin) {
  payload = {
    id: '',
    code: '',
    discount: 0,
    slots: 0,
  };
  formEvent = Constants.promoCodeForm;
  modalId = 'promo-code-form';
  service = promoCodeService;
  store = promoCodeStore;
}
</script>

<style scoped></style>
