import { AbstractService } from '../../shared/service/abstract-service.service';

class ProductService extends AbstractService {
  resource = 'products';
}

export const productService = new ProductService();
