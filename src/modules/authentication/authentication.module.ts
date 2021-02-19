import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { LoginUser, VerifyToken } from './authentication.api';
import { UserLoginDTO } from './authentication.model';
import { PreserveState } from '../../store/secure-storage';

const name = 'authentication';

@Module({
  store,
  name,
  dynamic: true,
  namespaced: true,
  preserveState: PreserveState(name),
})
class AuthenticationModule extends VuexModule {
  public user: any = {};
  public token: string = '';

  @Mutation
  LOGGED_IN(data: any) {
    console.log('data is', data);
    this.user = data.user;
    this.token = data.token;
  }

  @Mutation
  SET_USER(data: any) {
    this.user = data;
  }

  @Mutation
  LOGOUT() {
    this.user = {};
    this.token = '';
  }

  @Action({ commit: 'LOGGED_IN', rawError: true })
  public async Login(payload: UserLoginDTO) {
    const response = await LoginUser(payload);
    return response.data;
  }

  // @Action({ commit: 'LOGGED_IN', rawError: true })
  // public async Register(payload: RegisterModel) {
  //   const response = await Regist(payload);
  //   return response.data;
  // }

  @Action({ commit: 'SET_USER' })
  public async verifyToken() {
    const response = await VerifyToken();
    return response.data;
  }
}

export const authenticationStore = getModule(AuthenticationModule);
