import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { PreserveState } from '@/store/secure-storage';
import { sizeService } from './size.service';

const name = 'pg-sizes';

@Module({
  store,
  name,
  dynamic: true,
  namespaced: true,
  preserveState: PreserveState(name),
})
class SizeModule extends VuexModule {
  public sizes: any[] = [];

  @Mutation
  LOAD(sizes: any[]) {
    this.sizes = sizes;
  }

  @Action({ commit: 'LOAD' })
  async getAll() {
    const response = await sizeService.getAll();
    return response.data;
  }
}

export const sizeStore = getModule(SizeModule);
