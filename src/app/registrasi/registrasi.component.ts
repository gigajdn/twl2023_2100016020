import { Component, OnInit } from '@angular/core';
import { Registrasi } from './registrasi.model';
import { RegistrasiService } from './registrasi.service';


@Component({
  selector: 'app-registrasi',
  templateUrl: './registrasi.component.html',
  styleUrls: ['./registrasi.component.css']
})
export class RegistrasiComponent implements OnInit {
  registrasis: Registrasi[] = [];
  registrasi: Registrasi = new Registrasi();
  isEdit = false;

  constructor(private registasiService: RegistrasiService) {}

  ngOnInit(): void {
    this.getRegistrasis();
  }

  getRegistrasis(): void {
    this.registasiService.getRegistrasis().subscribe(registrasis => {
      this.registrasis = registrasis;
    });
  }

  addProduct(): void {
    this.registasiService.addProduct(this.registrasi).subscribe(registrasi => {
      this.registrasis.push(registrasi);
      this.registrasi = new Registrasi();
    });
  }

  deleteProduct(id: number): void {
    this.registasiService.deleteProduct(id).subscribe(() => {
      this.registrasis = this.registrasis.filter(registrasi => registrasi.id !== id);
    });
  }

  editProduct(registrasi: Registrasi): void {
    this.isEdit = true;
    this.registrasi = { ...registrasi };
  }

  updateProduct(): void {
    this.registasiService.updateProduct(this.registrasi).subscribe(() => {
      const index = this.registrasis.findIndex(p => p.id === this.registrasi.id);
      this.registrasis[index] = { ...this.registrasi };
      this.registrasi = new Registrasi();
      this.isEdit = false;
    });
  }

  cancel(): void {
    this.isEdit = false;
    this.registrasi = new Registrasi();
  }
}

