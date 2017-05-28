import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  private baseURL: string = "";
  private authToken;

  constructor(private http: Http) {
    this.http = http;
    this.authToken = localStorage.getItem('token');
  }

}
