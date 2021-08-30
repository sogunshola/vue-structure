import { AbstractService } from '../../shared/service/abstract-service.service';

class AreasService extends AbstractService {
  resource = 'areas';
}

export const areasService: AreasService = new AreasService();
