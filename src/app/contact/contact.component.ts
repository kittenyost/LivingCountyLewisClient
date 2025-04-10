import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule, FormsModule] // ✅ Add FormsModule here
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',     // ✅ Add this line
    message: ''
  };

  submitForm() {
    alert(`Thank you, ${this.formData.name}! Your message has been sent.`);
    this.formData = {
      name: '',
      email: '',
      phone: '',  // ✅ include this line here
      message: ''
    };
  }
}
