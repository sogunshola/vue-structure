import { responseHandler } from '../shared/helpers';
import { apiConfigService } from './api.config';

export class HttpClient {
  public resource!: string;

  async post(url?: string, data?: any) {
    const response = await apiConfigService
      .request()
      .post(`${this.resource}/${url}`, data);
    return responseHandler(response);
  }

  async put(url: string, data?: any) {
    const response = await apiConfigService
      .request()
      .put(`${this.resource}/${url}`, data);
    return responseHandler(response);
  }

  async get(url?: string, data?: any) {
    const response = await apiConfigService
      .request()
      .get(`${this.resource}/${url}`, data);
    return responseHandler(response);
  }

  async delete(url: string) {
    const response = await apiConfigService
      .request()
      .delete(`${this.resource}/${url}`);
    return responseHandler(response);
  }
}
