import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { PreserveState } from '@/store/secure-storage';
import { subCategoryService } from './sub-category.service';

const name = 'pg-sub-categories';

@Module({
  store,
  name,
  dynamic: true,
  namespaced: true,
  preserveState: PreserveState(name),
})
class SubCategoryModule extends VuexModule {
  public subCategories: any[] = [];

  @Mutation
  LOAD(subCategories: any[]) {
    this.subCategories = subCategories;
  }

  @Action({ commit: 'LOAD' })
  async getAll() {
    const response = await subCategoryService.getAll();
    return response.data;
  }
}

export const subCategoryStore = getModule(SubCategoryModule);
