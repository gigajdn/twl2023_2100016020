import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from './mahasiswa.model';
import { MahasiswaService } from './mahasiswa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mahasiswas: Mahasiswa[] = [];

  constructor(private mahasiswaService: MahasiswaService) { }

  ngOnInit(): void {
    this.mahasiswas = this.mahasiswaService.getMahasiswas();
  }

  editMahasiswa(mahasiswa: Mahasiswa): void {
    // TODO: Implement edit functionality
  }

  deleteMahasiswa(mahasiswa: Mahasiswa): void {
    this.mahasiswaService.deleteMahasiswa(mahasiswa);
    this.mahasiswas = this.mahasiswaService.getMahasiswas();
  }
}
