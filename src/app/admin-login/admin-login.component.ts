import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';
  showToast: boolean = false; // ✅ controls the welcome toast

  constructor(private http: HttpClient, private router: Router) { }

  login(): void {
   const loginData = {
  username: this.username.trim(),
  password: this.password.trim()
};

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    console.log('🔐 Sending login data:', loginData);

   this.http.post<any>('https://localhost:44351/api/Admin/login', loginData, { headers }).subscribe({
      next: (response) => {
        console.log('✅ Login response:', response);

        if (response.success && response.token) {
          localStorage.setItem('adminToken', response.token);
          this.error = '';

          // ✅ Show toast
          this.showToast = true;

          // ✅ Hide toast + navigate after 2.5s
          setTimeout(() => {
            this.showToast = false;
            this.router.navigate(['/admin']);
          }, 2500);
        } else {
          this.error = 'Login failed. Please try again.';
        }
      },
      error: (err) => {
  console.error('❌ Login error:', err);
  this.error = `Login failed: ${err.status} ${err.statusText}`;
}
    });
  }
}







