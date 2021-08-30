import { authenticationStore } from '../../modules/authentication/authentication.module';
import { VueEasyJwt } from 'vue-easy-jwt';
import Vue from 'vue';
import moment from 'moment';

export const GlobalEvent = new Vue();

export function responseHandler(response: any) {
  const output: {
    status: boolean;
    data?: any;
    message: string;
  } = response.data;

  // tslint:disable-next-line: no-console
  return output;
  // console.log(output);
  // if (output.status) {
  //   return output;
  // }

  // throw output;
}

export function showError(message: string) {
  throw new Error(message);
}

export function readableDate(date: string) {
  return moment(date).format('DD MMM YYYY');
}

export class AuthenticationService {
  public jwt: any = new VueEasyJwt();

  public async checkLogin() {
    const token: any = authenticationStore.token;
    if (!token) showError('Unauthorized');
    const exp = this.jwt.decodeToken(token).exp;
    const today = Math.floor(new Date().getTime() / 1000);
    if (exp < today) showError('Unauthorized');
    // console.log(exp, today);
    // await authenticationStore.VerifyToken();
  }
}
