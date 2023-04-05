import { Injectable } from '@angular/core';
import { Mahasiswa } from './mahasiswa.model';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {
  private mahasiswas: Mahasiswa[] = [
    {
      id:'1',
      nama: 'John Doe',
      nim: '1234567890',
      alamat: 'Jl. Jend. Sudirman No. 123',
      jenisKelamin: 'Laki-laki',
      programStudi: 'Teknik Informatika',
      fakultas: 'Teknik'
    },
    {
      id: '2',
      nama: 'Jane Doe',
      nim: '0987654321',
      alamat: 'Jl. Gatot Subroto No. 456',
      jenisKelamin: 'Perempuan',
      programStudi: 'Manajemen',
      fakultas: 'Ekonomi'
    }
  ];

  getMahasiswas(): Mahasiswa[] {
    return this.mahasiswas;
  }

  updateMahasiswa(mahasiswa: Mahasiswa): void {
    const index = this.mahasiswas.findIndex(m => m.nim === mahasiswa.nim);
    if (index !== -1) {
      this.mahasiswas[index] = mahasiswa;
    }
  }

  deleteMahasiswa(mahasiswa: Mahasiswa): void {
    this.mahasiswas = this.mahasiswas.filter(m => m.nim !== mahasiswa.nim);
  }
}
