import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { PreserveState } from '@/store/secure-storage';
import { ordersService } from './orders.service';

const name = 'pg-orders';

@Module({
  store,
  name,
  dynamic: true,
  namespaced: true,
  preserveState: PreserveState(name),
})
class OrdersModule extends VuexModule {
  public orders: any[] = [];
  public meta: any = {};

  @Mutation
  LOAD(data: any) {
    this.orders = data.data;
    this.meta = data.meta;
  }

  @Action({ commit: 'LOAD' })
  async getAll() {
    const response = await ordersService.getAll();
    return response;
  }
}

export const ordersStore = getModule(OrdersModule);
