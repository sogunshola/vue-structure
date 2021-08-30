import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { PreserveState } from '@/store/secure-storage';
import { brandService } from './brand.service';

const name = 'pg-brands';

@Module({
  store,
  name,
  dynamic: true,
  namespaced: true,
  preserveState: PreserveState(name),
})
class BrandModule extends VuexModule {
  public brands: any[] = [];

  @Mutation
  LOAD(brands: any[]) {
    this.brands = brands;
  }

  @Action({ commit: 'LOAD' })
  async getAll() {
    const response = await brandService.getAll();
    return response.data;
  }
}

export const brandStore = getModule(BrandModule);
