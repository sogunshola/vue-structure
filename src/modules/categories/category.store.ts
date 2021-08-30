import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { PreserveState } from '@/store/secure-storage';
import { categoryService } from './category.service';

const name = 'pg-categories';

@Module({
  store,
  name,
  dynamic: true,
  namespaced: true,
  preserveState: PreserveState(name),
})
class CategoryModule extends VuexModule {
  public categories: any[] = [];

  @Mutation
  LOAD(categories: any[]) {
    this.categories = categories;
  }

  @Action({ commit: 'LOAD' })
  async getAll() {
    const response = await categoryService.getAll();
    return response.data;
  }
}

export const categoryStore = getModule(CategoryModule);
