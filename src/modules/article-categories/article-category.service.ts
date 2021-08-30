import { AbstractService } from '../../shared/service/abstract-service.service';

class ArticleCategoryService extends AbstractService {
  resource = 'article-categories';
}

export const articleCategoryService: ArticleCategoryService = new ArticleCategoryService();
