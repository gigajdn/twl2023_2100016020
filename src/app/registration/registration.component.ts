import { Component, OnInit } from '@angular/core';
import { Registration } from './registration.model';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registration: Registration = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    termsAgreed: false
  };

  users: Registration[] = [];

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.registrationService.getUsers().subscribe(registration => {
      this.users = registration;
    });
  }

  register() {
    if (!this.registration.name || !this.registration.email || !this.registration.password || !this.registration.confirmPassword || !this.registration.country) {
      alert('All fields are required');
      return;
    }

    if (this.registration.password !== this.registration.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (this.registration.password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    if (!this.registration.termsAgreed) {
      alert('You must agree to the terms and conditions');
      return;
    }

    this.registrationService.register(this.registration).subscribe(
      response => {
        console.log('Registration successful', response);
        // Here you can redirect to a success page or do something else
      },
      error => {
        console.log('Registration failed', error);
        // Here you can show an error message to the user
      }
    );
  }
}
