import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from './registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private api = 'http://localhost:3000/registration';

  constructor(private http: HttpClient) { }

  register(registration: Registration): Observable<any> {
    return this.http.post(this.api, registration);
  }

  getUsers() : Observable<Registration[]>{
    return this.http.get<Registration[]>(this.api);
  }

}
