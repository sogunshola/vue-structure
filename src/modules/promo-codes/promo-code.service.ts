import { AbstractService } from '../../shared/service/abstract-service.service';

class PromoCodeService extends AbstractService {
  resource = 'promo-codes';
}

export const promoCodeService = new PromoCodeService();
