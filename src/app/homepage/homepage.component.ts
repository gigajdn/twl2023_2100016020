import { Component, OnInit } from '@angular/core';
import { datamhs } from './datamhs/datamhs.model';
import { MahasiswaService } from './datamhs/datamhs.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  mahasiswa: datamhs[] = [];

  constructor(private mahasiswaService: MahasiswaService) { }

  ngOnInit(): void {
    this.mahasiswaService.getMahasiswas().subscribe(data => {
      this.mahasiswa = data;
  });
}

  editMahasiswa(mahasiswas: datamhs): void {
    // TODO: Implement edit functionality
  }

  deleteMahasiswa(mahasiswa: datamhs): void {
    if (confirm(`Anda yakin ingin menghapus data ${mahasiswa.nama}?`)) {
      this.mahasiswaService.deleteMahasiswa(mahasiswa.id)
        .subscribe(() => {
          this.mahasiswa = this.mahasiswa.filter(m => m !== mahasiswa);
        });
    }
  } 
}
