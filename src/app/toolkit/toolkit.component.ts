import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolkit',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './toolkit.component.html',
  styleUrls: ['./toolkit.component.css']
})
export class ToolkitComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    phone: ''
  };

  formSubmitted = false;
  isAdmin = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.isAdmin = !!localStorage.getItem('adminToken');

    if (!this.isAdmin) {
      alert('Access denied. Admins only.');
      this.router.navigate(['/']);
    }
  }

  submitForm() {
    console.log('📤 Sending form data to backend:', this.formData);

    this.http.post('http://localhost:5287/api/emailleads', this.formData).subscribe({
      next: () => {
        console.log('✅ Submission successful');
        this.formSubmitted = true;
      },
      error: (err) => {
        console.error('🚨 Submission failed:', err);
      }
    });
  }
}
