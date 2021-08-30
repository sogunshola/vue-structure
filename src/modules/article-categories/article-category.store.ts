import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { PreserveState } from '@/store/secure-storage';
import { articleCategoryService } from './article-category.service';

const name = 'sample';

@Module({
  store,
  name,
  dynamic: true,
  namespaced: true,
  preserveState: PreserveState(name),
})
class ArticleCategoryModule extends VuexModule {
  public articleCategories: any[] = [];

  @Mutation
  LOAD(articleCategories: any[]) {
    this.articleCategories = articleCategories;
  }

  @Action({ commit: 'LOAD' })
  async getAll() {
    const response = await articleCategoryService.getAll();
    return response.data;
  }
}

export const articleCategoryStore = getModule(ArticleCategoryModule);
