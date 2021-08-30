import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { PreserveState } from '@/store/secure-storage';
import { articlesService } from './articles.service';

const name = 'pg-articles';

@Module({
  store,
  name,
  dynamic: true,
  namespaced: true,
  preserveState: PreserveState(name),
})
class ArticleModule extends VuexModule {
  public articles: any[] = [];

  @Mutation
  LOAD(articles: any[]) {
    this.articles = articles;
  }

  @Action({ commit: 'LOAD' })
  async getAll() {
    const response = await articlesService.getAll();
    return response.data;
  }
}

export const articlesStore = getModule(ArticleModule);
