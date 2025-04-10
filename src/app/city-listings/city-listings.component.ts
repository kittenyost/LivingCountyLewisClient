import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city-listings',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './city-listings.component.html',
  styleUrls: ['./city-listings.component.css']
})
export class CityListingsComponent implements OnInit {
  @Input() areaNumber!: string;
  listings: any[] = [];
  loading = true;
  error: string | null = null;

  userEmail: string = '';
  submitted = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (this.areaNumber) {
      this.fetchListings();
    }
  }

  fetchListings() {
    const url = `http://localhost:5287/api/listings/area/${this.areaNumber}`;
    this.http.get<any[]>(url).subscribe({
      next: data => {
        this.listings = data;
        this.loading = false;
      },
      error: err => {
        console.error(`❌ Failed to load listings for area ${this.areaNumber}`, err);
        this.error = 'Could not load listings.';
        this.loading = false;
      }
    });
  }

  submitEmail() {
    const payload = {
      email: this.userEmail,
      area: this.areaNumber
    };

    this.http.post('http://localhost:5287/api/EmailLeads', payload).subscribe({
      next: () => {
        this.submitted = true;
        this.userEmail = '';
      },
      error: err => {
        console.error('🚨 Error submitting email lead:', err);
      }
    });
  }
  getLocalImage(title: string): string {
    const imageMap: { [key: string]: string } = {
      "Modern Family Home": "/assets/images/modern-familyhome_resized.jpg",
      "Luxury Villa": "/assets/images/luxury-villa_resized.jpg",
      "Cozy Cabin": "/assets/images/cozy-cabin_resized.jpg",
      "Downtown Apartment": "/assets/images/downtown-apartment_resized.jpg"
    };
    return imageMap[title] || "/assets/images/placeholder.jpg";
  }

}
