import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-value-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-value-calculator.component.html',
  styleUrls: ['./home-value-calculator.component.css']
})
export class HomeValueCalculatorComponent {
  address: string = '';
  unit: string = '';
  estimatedValue: number | null = null;

  getEstimate() {
    if (!this.address.trim()) {
      alert('Please enter a valid address');
      return;
    }

    // 🧠 Fake estimation logic — replace with real API later
    const baseValue = 300000;
    const randomOffset = Math.floor(Math.random() * 100000);
    this.estimatedValue = baseValue + randomOffset;
  }
}
