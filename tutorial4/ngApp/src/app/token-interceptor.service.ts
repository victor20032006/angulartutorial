import { Injectable, Injector } from '@angular/core';
import { HTTP_INTERCEPTORS,HttpInterceptor, HttpResponse } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

	constructor(private _injector: Injector, private _router: Router) { }

	intercept(req, next){
		let authService = this._injector.get(AuthService);
		let tokenizedReq = req.clone({
			setHeaders: {
				Authorization: `Bearer ${authService.getToken()}`
			}
		});

		return next.handle(tokenizedReq);
	}
}