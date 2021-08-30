import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { PreserveState } from '@/store/secure-storage';
import { deliveryLocationsService } from './delivery-locations.service';

const name = 'pg-delivery-locations';

@Module({
  store,
  name,
  dynamic: true,
  namespaced: true,
  preserveState: PreserveState(name),
})
class DeliveryLocationModule extends VuexModule {
  public deliveryLocations: any[] = [];

  @Mutation
  LOAD(deliveryLocations: any[]) {
    this.deliveryLocations = deliveryLocations;
  }

  @Action({ commit: 'LOAD' })
  async getAll() {
    const response = await deliveryLocationsService.getAll();
    return response.data;
  }
}

export const deliveryLocationsStore = getModule(DeliveryLocationModule);
