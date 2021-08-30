<template>
  <custom-modal :id="modalId" title="Delivery Location Form">
    <form action="">
      <div class="form-group">
        <label for="name" class="col-form-label">Location Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          v-model="payload.name"
          v-validate="'required'"
        />
        <error :data="errors" name="name"></error>
      </div>

      <div class="form-group">
        <label for="name" class="col-form-label">Location Description</label>
        <textarea
          class="form-control"
          name="description"
          v-model="payload.description"
          v-validate="'required'"
        ></textarea>
        <error :data="errors" name="description"></error>
      </div>

      <!-- <div class="form-group">
        <label for="name" class="col-form-label">Delivery Fee (NGN)</label>
        <currency-input
          id="deliveryFee"
          name="deliveryFee"
          class="form-control"
          v-validate="'required'"
          v-model="payload.deliveryFee"
        />
        <error :data="errors" name="deliveryFee"></error>
      </div> -->
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
import { ModalFormMixin } from '../../shared/mixins/modal.mixin';
import { deliveryLocationsService } from './delivery-locations.service';
import { deliveryLocationsStore } from './delivery-locations.store';

@Component
export default class DeliveryLocationForm extends mixins(ModalFormMixin) {
  formEvent = Constants.deliveryLocationForm;
  modalId = 'delivery-location-form';
  service = deliveryLocationsService;
  store = deliveryLocationsStore;
}
</script>

<style scoped></style>
