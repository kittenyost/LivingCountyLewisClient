import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListingsComponent } from '../../city-listings/city-listings.component'; // ✅ Import

@Component({
  selector: 'app-montesano',
  standalone: true,
  imports: [CommonModule, CityListingsComponent], // ✅ Add here
  templateUrl: './montesano.component.html',
  styleUrl: './montesano.component.css'
})
export class MontesanoComponent {

}
