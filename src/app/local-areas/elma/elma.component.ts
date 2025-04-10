import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListingsComponent } from '../../city-listings/city-listings.component'; // ✅ Import


@Component({
  selector: 'app-elma',
  standalone: true,
  imports: [CommonModule, CityListingsComponent], // ✅ Add here
  templateUrl: './elma.component.html',
  styleUrl: './elma.component.css'
})
export class ElmaComponent {

}
