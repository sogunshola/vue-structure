import { AbstractService } from '../../shared/service/abstract-service.service';

export class OrderService extends AbstractService {
  resource = 'orders';
}

export const ordersService: OrderService = new OrderService();
