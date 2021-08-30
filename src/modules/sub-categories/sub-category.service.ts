import { AbstractService } from '../../shared/service/abstract-service.service';

class SubCategoryService extends AbstractService {
  resource = 'sub-categories';
}

export const subCategoryService = new SubCategoryService();
