import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  mahasiswa = { 
    nama: '', 
    nim: '', 
    alamat: '', 
    jenisKelamin: '', 
    programStudi: '',
    fakultas: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/mhs', this.mahasiswa)
      .subscribe((response) => {
        console.log(response);
      });
      this.mahasiswa = {     
      nama: '', 
      nim: '', 
      alamat: '', 
      jenisKelamin: '', 
      programStudi: '',
      fakultas: '' 
    };
  }
}


