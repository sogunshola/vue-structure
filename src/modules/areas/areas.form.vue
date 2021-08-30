<template>
  <custom-modal :id="modalId" title="Delivery Area Form">
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

      <label for="name" class="col-form-label">Country</label>
      <v-select
        :options="deliveryLocations"
        :multiple="false"
        v-model="payload.deliveryLocationId"
        class="style-chooser"
        v-validate="'required'"
        label="name"
        name="deliveryLocations"
        :reduce="(data) => data.id"
      ></v-select>
      <error :data="errors" name="deliveryLocations"></error>

      <div class="form-group">
        <label for="name" class="col-form-label">Delivery Fee (NGN)</label>
        <currency-input
          id="deliveryFee"
          name="deliveryFee"
          class="form-control"
          v-validate="'required'"
          v-model="payload.deliveryFee"
        />
        <error :data="errors" name="deliveryFee"></error>
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
import { ModalFormMixin } from '../../shared/mixins/modal.mixin';
import { deliveryLocationsStore } from '../delivery-locations/delivery-locations.store';
import { areasService } from './areas.service';
import { areasStore } from './areas.store';

@Component
export default class AreasForm extends mixins(ModalFormMixin) {
  formEvent = Constants.areasForm;
  modalId = 'areas-form';
  service = areasService;
  store = areasStore;

  get deliveryLocations() {
    return deliveryLocationsStore.deliveryLocations;
  }
}
</script>

<style scoped></style>
