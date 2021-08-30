import { HttpClient } from '../../config/http';
import { PaginationOptions } from '../interfaces/pagination-options.interface';

export class AbstractService extends HttpClient {
  // public resource!: string;
  // interface Model;

  async getAll(pagination?: PaginationOptions, ...args: any) {
    return await this.get('', { params: pagination });
  }

  async list() {
    return await this.get(`list/get`);
  }

  async findOne(id: string) {
    return await this.get(id);
  }

  async create(payload: any, ...args: any) {
    return await this.post(``, payload);
  }

  async update(payload: any, ...args: any) {
    return await this.put(payload.id, payload);
  }

  async remove(id: string) {
    return await this.delete(id);
  }

  // abstract dtoClass: new (entity: AbstractService, options?: any) => T;
}
