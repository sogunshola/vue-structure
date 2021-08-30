import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { PreserveState } from '@/store/secure-storage';
import { collectionsService } from './collections.service';

const name = 'pg-collections';

@Module({
  store,
  name,
  dynamic: true,
  namespaced: true,
  preserveState: PreserveState(name),
})
class CollectionsModule extends VuexModule {
  public collections: any[] = [];

  @Mutation
  LOAD(collections: any[]) {
    this.collections = collections;
  }

  @Action({ commit: 'LOAD' })
  async getAll() {
    const response = await collectionsService.getAll();
    return response.data;
  }
}

export const collectionsStore = getModule(CollectionsModule);
