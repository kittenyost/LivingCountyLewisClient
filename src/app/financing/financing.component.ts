import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-financing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './financing.component.html',
  styleUrl: './financing.component.css'
})
export class FinancingComponent {
  constructor(private http: HttpClient) {}

  formData = {
    name: '',
    email: '',
    phone: '',
    message: 'I would like information about financing options.'
  };

  submitForm() {
    const lead = {
      name: this.formData.name,
      email: this.formData.email,
      phone: this.formData.phone,
      message: this.formData.message,
      submittedAt: new Date()
    };

    this.http.post('https://localhost:44351/api/emailleads', lead)
      .subscribe({
        next: () => {
          alert('Financing request sent successfully!');
          this.formData = {
            name: '',
            email: '',
            phone: '',
            message: 'I would like information about financing options.'
          };
        },
        error: (err) => {
          console.error('POST failed:', err);
          alert('Something went wrong.');
        }
      });
  }
}
