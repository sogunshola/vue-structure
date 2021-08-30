import { AbstractService } from '../../shared/service/abstract-service.service';

class CategoryService extends AbstractService {
  resource = 'categories';
}

export const categoryService = new CategoryService();
