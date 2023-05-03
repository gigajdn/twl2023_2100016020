export class Registrasi {
    id: number;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    country: string;
    termsAgreed: boolean = false;
  
    constructor() {
        this.id = 0;
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.country = '';      
    }
  }
  