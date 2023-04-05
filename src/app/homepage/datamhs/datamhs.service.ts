import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { datamhs } from './datamhs.model';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {
    private mahasiswasUrl = 'http://localhost:3000/mahasiswas';
    private httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    constructor(private http: HttpClient) { }
//   private mahasiswas: datamhs[] = [
//     {
//       nama: 'John Doe',
//       nim: '1234567890',
//       alamat: 'Jl. Jend. Sudirman No. 123',
//       jenisKelamin: 'Laki-laki',
//       programStudi: 'Teknik Informatika',
//       fakultas: 'Teknik'
//     },
//     {
//       nama: 'Jane Doe',
//       nim: '0987654321',
//       alamat: 'Jl. Gatot Subroto No. 456',
//       jenisKelamin: 'Perempuan',
//       programStudi: 'Manajemen',
//       fakultas: 'Ekonomi'
//     }
//   ];

    getMahasiswas(): Observable<datamhs[]> {
    return this.http.get<datamhs[]>(this.mahasiswasUrl)
      .pipe(
        catchError(this.handleError<datamhs[]>('getMahasiswas', []))
      );
  }

//   updateMahasiswa(mahasiswa: datamhs): void {
//     const index = this.mahasiswas.findIndex(m => m.nim === mahasiswa.nim);
//     if (index !== -1) {
//       this.mahasiswas[index] = mahasiswa;
//     }
//   }

  addMahasiswa(mahasiswa: datamhs): Observable<datamhs> {
    const id = this.generateId();
    const newMahasiswa = { ...mahasiswa, id };
    this.mahasiswas.push(newMahasiswa);
    return this.http.post<datamhs>(this.mahasiswasUrl, mahasiswa, this.httpOptions).pipe(
      tap((newMahasiswa: datamhs) => console.log(`added mahasiswa w/ id=${newMahasiswa.id}`)),
      catchError(this.handleError<datamhs>('addMahasiswa'))
    );
  }

  deleteMahasiswa(mahasiswa: datamhs): Observable<datamhs> {
    const url = `${this.mahasiswasUrl}/${mahasiswa.id}`;

    return this.http.delete<datamhs>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted mahasiswa id=${mahasiswa.id}`)),
      catchError(this.handleError<datamhs>('deleteMahasiswa'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }  
}
