import { Configuration } from './configuration';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Constants } from './../app.constants';

@Injectable()
export class UserService {

    private actionUrl: string;

    constructor(private http: HttpClient, private configuration: Configuration) {
        this.actionUrl = configuration.fullApiUrl + 'auth/token';
    }

    userAuthentication(userName, password) {
      const data = {'username': userName, 'password': password, 'grant_type': 'password'};
      // tslint:disable-next-line:prefer-const
      // tslint:disable-next-line:max-line-length
      // tslint:disable-next-line:prefer-const
      let reqHeader = new HttpHeaders({
          'No-Auth': 'True',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(userName + ':' + password)});
      return this.http.post(this.actionUrl, JSON.stringify(data), { headers: reqHeader });
    }

    getUserClaims() {
     return  this.http.get(this.actionUrl + 'api/GetUserClaims');
    }

    storeAuth(data) {
      localStorage.setItem('userToken', data.access_token);
      localStorage.setItem('userData', JSON.stringify(data.userData));
    }

    getUserData(): any {
        const data = localStorage.getItem('userData')
        return JSON.parse(data);
    }

    getUserToken(): string {
        const data = localStorage.getItem('userToken')
        return data;
    }
}


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req);
    }
}
