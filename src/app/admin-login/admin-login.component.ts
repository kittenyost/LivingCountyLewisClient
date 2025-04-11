import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) { }

  login(): void {
    const isValid =
      this.email === environment.adminEmail &&
      this.password === environment.adminPassword;

    if (isValid) {
      localStorage.setItem('isAdmin', 'true');

      // ✅ Optional: Clear inputs and error
      this.email = '';
      this.password = '';
      this.error = '';

      // ✅ Reload app to trigger navbar visibility & guard checks
      window.location.href = '/admin';
    } else {
      this.error = 'Invalid email or password';
    }
  }
}








