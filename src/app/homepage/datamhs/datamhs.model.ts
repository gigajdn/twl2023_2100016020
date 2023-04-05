export class datamhs {
    id: string;
    nama: string;
    nim: string;
    alamat: string;
    jenisKelamin: string;
    programStudi: string;
    fakultas: string;
  
    constructor(id: string, nama: string, nim: string, alamat: string, jenisKelamin: string, programStudi: string, fakultas: string) {
      this.id = id;
      this.nama = nama;
      this.nim = nim;
      this.alamat = alamat;
      this.jenisKelamin = jenisKelamin;
      this.programStudi = programStudi;
      this.fakultas = fakultas;
    }
  }
  