import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ContactComponent {
  constructor(private http: HttpClient) {}

  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitForm() {
    const lead = {
  name: this.formData.name,
  email: this.formData.email,
  phone: this.formData.phone,
  message: this.formData.message,
  submittedAt: new Date()
};

    console.log('Sending lead:', lead);

    this.http.post('https://localhost:44351/api/emailleads', lead)
      .subscribe({
        next: (response) => {
          console.log('POST success:', response);
          alert('Message sent successfully!');
          this.formData = {
            name: '',
            email: '',
            phone: '',
            message: ''
          };
        },
        error: (err) => {
          console.error('POST failed:', err);
          alert('Something went wrong.');
        }
      });
  }
}