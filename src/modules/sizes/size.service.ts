import { AbstractService } from '../../shared/service/abstract-service.service';

class SizeService extends AbstractService {
  resource = 'sizes';
}

export const sizeService = new SizeService();
