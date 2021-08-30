import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { PreserveState } from '@/store/secure-storage';
import { productService } from './product.service';

const name = 'pg-products';

@Module({
  store,
  name,
  dynamic: true,
  namespaced: true,
  preserveState: PreserveState(name),
})
class ProductModule extends VuexModule {
  public products: any[] = [];
  public meta: any = {};

  @Mutation
  LOAD(data: any) {
    this.products = data.data;
    this.meta = data.meta;
  }

  @Action({ commit: 'LOAD' })
  async getAll() {
    const response = await productService.list();
    return response;
  }
}

export const productStore = getModule(ProductModule);
