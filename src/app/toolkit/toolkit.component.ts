import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Correct path
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-toolkit',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // ✅ this part is key
  templateUrl: './toolkit.component.html',
  styleUrls: ['./toolkit.component.css']
})
export class ToolkitComponent {
  formData = {
    name: '',
    email: '',
    phone: ''
  };

  formSubmitted = false;

  constructor(private http: HttpClient) { }

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
