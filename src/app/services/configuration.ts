
import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public protocol = 'http'
    public server = 'localhost';
    public port = 5000;
    public apiUrl = 'api/';
    public serverWithApiUrl = this.server + this.apiUrl;
    public fullApiUrl = this.protocol + '://' + this.server + ':' + this.port + '/' + this.apiUrl
}
