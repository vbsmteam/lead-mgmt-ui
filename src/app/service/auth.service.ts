import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  login(leadname: string, password: string) {
    return this.http.post<any>('/api/authenticate', {leadname: leadname, password: password})
      .pipe(map(lead => {
        // login successful if there's a jwt token in the response
        if (lead && lead.token) {
          // store lead details and jwt token in local storage to keep lead logged in between page refreshes
          localStorage.setItem('currentLead', JSON.stringify(lead));
        }

        return lead;
      }));
  }
}
