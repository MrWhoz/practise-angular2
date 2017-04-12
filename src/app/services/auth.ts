import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/Rx';

@Injectable()
export class AuthService implements CanActivate {
  JWT_KEY: string = 'retain_token';
  JWT: string = '';

  constructor(private router: Router) {}

  isAuthorized(): boolean {
    return Boolean(this.JWT);
  }

  canActivate(): boolean {
 	console.log('--------------------------Get canActivate');
    const canActivate = this.isAuthorized();
    this.onCanActivate(canActivate);
    return canActivate;
  }

  onCanActivate(canActivate: boolean) {
	console.log('------------------------Get onCanActivate');
    if (!canActivate) {
      this.router.navigate(['', 'auth']);
    }
  }
}
