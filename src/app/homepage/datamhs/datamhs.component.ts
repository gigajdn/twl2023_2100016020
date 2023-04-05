import { Component, OnInit } from '@angular/core';
import { datamhs } from './datamhs.model';
import { MahasiswaService } from './datamhs.service';

@Component({
  selector: 'app-datamhs',
  templateUrl: './datamhs.component.html',
  styleUrls: ['./datamhs.component.scss']
})
export class DatamhsComponent implements OnInit {
  mahasiswa: datamhs[]=[];
  datamhs = {
    id: '',
    nama: '',
    nim: '',
    alamat: '',
    jenisKelamin: '',
    programStudi: '',
    fakultas: ''
  };

  constructor(private mahasiswaService: MahasiswaService) { }

  ngOnInit() {
    this.getMahasiswa();
  }

  getMahasiswa(): void {
    this.mahasiswaService.getMahasiswas()
      .subscribe(mahasiswa => this.mahasiswa = mahasiswa);
  }

  addMahasiswa(mahasiswa: datamhs): void {
    this.mahasiswaService.addMahasiswa(mahasiswa)
      .subscribe(newMahasiswa => {
        this.mahasiswa.push(newMahasiswa);
        this.resetForm();
      });
  }
  resetForm(): void {
    this.datamhs = {
      id: '',
      nama: '',
      nim: '',
      alamat: '',
      jenisKelamin: 'L',
      programStudi: '',
      fakultas: ''
    };
  } 
 

  onSubmit(): void {
    this.addMahasiswa(this.datamhs);
  }

}
