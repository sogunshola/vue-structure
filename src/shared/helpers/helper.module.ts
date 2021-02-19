import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { initialUnencryptedStorage } from '../../store/secure-storage';

const name = 'helpers';

@Module({
  store,
  name,
  dynamic: true,
  preserveState: Boolean(initialUnencryptedStorage[name]),
})
class HelperModule extends VuexModule {
  public isLoading: boolean = false;
  public message: string = 'Please Wait...';

  @Mutation
  SHOW_LOADING(message?: string) {
    this.isLoading = true;
    if (message) {
      this.message = message;
    }
  }

  @Mutation
  HIDE_LOADING() {
    this.isLoading = false;
    this.message = 'Please Wait...';
  }
}

export const helpers = getModule(HelperModule);
