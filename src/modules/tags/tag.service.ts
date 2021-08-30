import { apiConfigService } from '../../config/api.config';
import { AbstractService } from '../../shared/service/abstract-service.service';

class TagService extends AbstractService {
  resource = 'tags';
}

export const tagService = new TagService();

tagService.create({ dmdm: 'dkdkkd' });

export async function GetAllMatters() {}

class MattersService {
  static async create() {
    const response = await apiConfigService.request().post('/api/');
    return response.data;
  }

  update() {}
}


const mattersService = new MattersService();


MattersService.create();