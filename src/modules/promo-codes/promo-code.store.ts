import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { PreserveState } from '@/store/secure-storage';
import { promoCodeService } from './promo-code.service';

const name = 'pg-promo-codes';

@Module({
  store,
  name,
  dynamic: true,
  namespaced: true,
  preserveState: PreserveState(name),
})
class PromoCodeModule extends VuexModule {
  public promoCodes: any[] = [];

  @Mutation
  LOAD(promoCodes: any[]) {
    this.promoCodes = promoCodes;
  }

  @Action({ commit: 'LOAD' })
  async getAll() {
    const response = await promoCodeService.getAll();
    return response.data;
  }
}

export const promoCodeStore = getModule(PromoCodeModule);
