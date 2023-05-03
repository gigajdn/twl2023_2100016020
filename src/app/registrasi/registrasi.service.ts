import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registrasi } from './registrasi.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrasiService {
  private api = 'http://localhost:3000/registrasi';

  constructor(private http: HttpClient) { }

  getRegistrasis(): Observable<Registrasi[]> {
    return this.http.get<Registrasi[]>(this.api);
  }

  getProduct(id: number): Observable<Registrasi> {
    return this.http.get<Registrasi>(`${this.api}/${id}`);
  }

  addProduct(registrasi: Registrasi): Observable<Registrasi> {
    return this.http.post<Registrasi>(this.api, registrasi);
  }

  updateProduct(registrasi: Registrasi): Observable<Registrasi> {
    return this.http.put<Registrasi>(`${this.api}/${registrasi.id}`, registrasi);
  }

  deleteProduct(id: number): Observable<Registrasi> {
    return this.http.delete<Registrasi>(`${this.api}/${id}`);
  }
  reIndexRegistrasis(registrasis: Registrasi[]): Registrasi[] {
    return registrasis.map((registrasi, index) => {
      return {
        ...registrasi,
        id: index + 1
      };
    });
  } 

}
