import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListingsComponent } from '../../city-listings/city-listings.component'; // ✅ Import

@Component({
  selector: 'app-olympia',
  standalone: true,
  imports: [CommonModule, CityListingsComponent], // ✅ Add hereimports: [],
  templateUrl: './olympia.component.html',
  styleUrl: './olympia.component.css'
})
export class OlympiaComponent {

}
