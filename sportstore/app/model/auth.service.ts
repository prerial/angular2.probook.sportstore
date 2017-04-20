/**
 * Created by Mikhail on 4/20/2017.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { RestDataSource } from './rest.datasource';

@Injectable()
export class AuthService {
  constructor(private datasource: RestDataSource) {}
  authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }
  get authenticated(): boolean {
    return this.datasource.auth_token !== null;
  }
  clear() {
    this.datasource.auth_token = null;
  }
}
