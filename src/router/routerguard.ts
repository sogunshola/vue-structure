import { AuthenticationService } from '../shared/helpers';

const authService = new AuthenticationService();

export async function AppGuard(to: any, from: any, next: any) {
  try {
    await authService.checkLogin();
    next();
  } catch (error) {
    next('/login');
  }
}

export async function LoginGuard(to: any, from: any, next: any) {
  try {
    await authService.checkLogin();
    next('/app');
  } catch (error) {
    next();
  }
}
