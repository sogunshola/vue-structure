import { AbstractService } from '../../shared/service/abstract-service.service';

class BrandService extends AbstractService {
  resource = 'brands';
}

export const brandService = new BrandService();
