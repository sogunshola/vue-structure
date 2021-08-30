import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { PreserveState } from '@/store/secure-storage';
import { areasService } from './areas.service';

const name = 'pg-areas';

@Module({
  store,
  name,
  dynamic: true,
  namespaced: true,
  preserveState: PreserveState(name),
})
class AreasModule extends VuexModule {
  public areas: any[] = [];

  @Mutation
  LOAD(areas: any[]) {
    this.areas = areas;
  }

  @Action({ commit: 'LOAD' })
  async getAll() {
    const response = await areasService.getAll();
    return response.data;
  }
}

export const areasStore = getModule(AreasModule);
