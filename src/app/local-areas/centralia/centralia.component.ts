import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListingsComponent } from '../../city-listings/city-listings.component';

@Component({
  selector: 'app-centralia',
  standalone: true,
  imports: [CommonModule, CityListingsComponent],
  templateUrl: './centralia.component.html',
  styleUrls: ['./centralia.component.css']
})
export class CentraliaComponent { }
