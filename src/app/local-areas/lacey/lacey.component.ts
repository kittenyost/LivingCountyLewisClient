import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListingsComponent } from '../../city-listings/city-listings.component'; // ✅ Import

@Component({
  selector: 'app-lacey',
  standalone: true,
  imports: [CommonModule, CityListingsComponent], // ✅ Add here
  templateUrl: './lacey.component.html',
  styleUrl: './lacey.component.css'
})
export class LaceyComponent {

}
