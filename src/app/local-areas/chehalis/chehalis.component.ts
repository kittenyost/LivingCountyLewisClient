import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListingsComponent } from '../../city-listings/city-listings.component'; // ✅ Import

@Component({
  selector: 'app-chehalis',
  standalone: true,
  imports: [CommonModule, CityListingsComponent], // ✅ Add here
  templateUrl: './chehalis.component.html',
  styleUrls: ['./chehalis.component.css']
})
export class ChehalisComponent { }
