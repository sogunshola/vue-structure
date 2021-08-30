import { AbstractService } from '../../shared/service/abstract-service.service';

class CollectionsService extends AbstractService {
  resource = 'collections';
}

export const collectionsService = new CollectionsService();
