// import { notify } from '@/utilities/functions';
import axios from 'axios';
import { authenticationStore } from '../modules/authentication/authentication.module';

class ApiConfigService {
  public request() {
    return axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      headers: this.setHeaderAuthorization(),
    });
  }

  public loginRequest() {
    return axios.create({
      baseURL: process.env.VUE_APP_API_URL,
    });
  }

  private setHeaderAuthorization() {
    return {
      Authorization: `Bearer ${authenticationStore.token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }
}

export const apiConfigService = new ApiConfigService();
