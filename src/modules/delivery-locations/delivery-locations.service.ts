import { AbstractService } from '../../shared/service/abstract-service.service';

class DeliveryLocation extends AbstractService {
  resource = 'delivery-locations';
}

export const deliveryLocationsService: DeliveryLocation = new DeliveryLocation();
