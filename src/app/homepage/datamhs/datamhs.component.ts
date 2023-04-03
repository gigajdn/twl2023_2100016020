import { Component } from '@angular/core';

@Component({
  selector: 'app-datamhs',
  templateUrl: './datamhs.component.html',
  styleUrls: ['./datamhs.component.scss']
})
export class DatamhsComponent {
  datamhs = {
    nama: '',
    nim: '',
    alamat: '',
    jenisKelamin: '',
    programStudi: '',
    fakultas: ''
  };

  simpanForm() {

  }

}
