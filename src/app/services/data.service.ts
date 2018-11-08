import { Configuration } from './configuration';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

    private actionUrl: string;
    private reqHeader = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'});

            constructor(private http: HttpClient, private configuration: Configuration) {
        this.actionUrl = configuration.fullApiUrl;
    }

    post(data: any, url) {
        return this.http.post(this.actionUrl + url, data, { headers: this.reqHeader });
      }

    get(url) {
        return this.http.get(this.actionUrl + url, { headers: this.reqHeader });
     }

    getUserClaims() {
        return this.http.get(this.actionUrl + 'api/GetUserClaims');
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
