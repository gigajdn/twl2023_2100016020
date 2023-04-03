import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jsrsasign from 'jsrsasign';
import { DatamhsComponent } from './homepage/datamhs/datamhs.component';

@Injectable({
  providedIn: 'root'  
})



export class AuthService {

  generateJwtToken(DatamhsComponent: any): string {
    // Isi dengan kode untuk menghasilkan token JWT
    const header = { alg: 'HS256', typ: 'JWT' };
    const payload = {
    nama: DatamhsComponent.nama,
    nim: DatamhsComponent.nim,
    alamat: DatamhsComponent.alamat,
    jenis_kelamin: DatamhsComponent.jenis_kelamin,
    program_studi: DatamhsComponent.program_studi,
    fakultas: DatamhsComponent.fakultas
    
  };
  const secret = 'rahasia';
  const signedToken = jsrsasign.jws.JWS.sign(null, header, payload, secret);

}

  constructor() { }
}
