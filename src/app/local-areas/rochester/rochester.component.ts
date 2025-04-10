import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListingsComponent } from '../../city-listings/city-listings.component'; // ✅ Import

@Component({
  selector: 'app-rochester',
  standalone: true,
  imports: [CommonModule, CityListingsComponent], // ✅ Add here
  templateUrl: './rochester.component.html',
  styleUrl: './rochester.component.css'
})
export class RochesterComponent {

}
