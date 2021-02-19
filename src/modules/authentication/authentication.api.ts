import { apiConfigService } from '../../config/api.config';
import { responseHandler } from '../../shared/helpers';
import { UserLoginDTO } from './authentication.model';

export async function LoginUser(payload: UserLoginDTO) {
  const response = await apiConfigService
    .loginRequest()
    .post('auth/login', payload);
  const output = responseHandler(response);
  return output;
}

export async function VerifyToken() {
  const response = await apiConfigService.request().post('auth/me');
  const output = responseHandler(response);
  return output;
}
