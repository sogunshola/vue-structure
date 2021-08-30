import { AbstractService } from '../../shared/service/abstract-service.service';

class ArticlesService extends AbstractService {
  resource = 'articles';
}

export const articlesService: ArticlesService = new ArticlesService();
