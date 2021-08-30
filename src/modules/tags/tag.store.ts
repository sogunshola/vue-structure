import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { PreserveState } from '@/store/secure-storage';
import { tagService } from './tag.service';

const name = 'pg-tags';

@Module({
  store,
  name,
  dynamic: true,
  namespaced: true,
  preserveState: PreserveState(name),
})
class TagModule extends VuexModule {
  public tags: any[] = [];

  @Mutation
  LOAD(tags: any[]) {
    this.tags = tags;
  }

  @Action({ commit: 'LOAD' })
  async getAll() {
    const response = await tagService.getAll();
    return response.data;
  }
}

export const tagStore = getModule(TagModule);


