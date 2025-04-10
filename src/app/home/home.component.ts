import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingsService } from '../services/listings.service';
import { RouterModule } from '@angular/router';
import { HomeValueCalculatorComponent } from '../home-value-calculator/home-value-calculator.component'; // ✅ Import the calculator

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule, HomeValueCalculatorComponent] // ✅ Add to imports
})
export class HomeComponent implements OnInit {
  featuredListings: any[] = [];
  showCalculator = false; // ✅ Only declare this once

  constructor(private listingsService: ListingsService) { }

  ngOnInit(): void {
    console.log('✅ Fetching Featured Listings...');
    this.listingsService.getListings().subscribe(
      (data) => {
        console.log('📌 Fetched API Listings:', data);
        this.featuredListings = data.slice(0, 3).map(listing => {
          const updatedListing = {
            ...listing,
            image: this.getLocalImage(listing.title, listing.image),
            address: this.getAddress(listing.title),
          };
          console.log('📝 Updated Listing:', updatedListing);
          return updatedListing;
        });
        console.log('📸 Checking Featured Listings:', this.featuredListings);
      },
      (error) => {
        console.error('🚨 Error fetching featured listings:', error);
      }
    );
  }

  toggleCalculator() {
    this.showCalculator = !this.showCalculator;
  }

  getLocalImage(title: string, originalImage: string): string {
    const imageMap: { [key: string]: string } = {
      'Modern Family Home': 'assets/images/modern-familyhome_resized.jpg',
      'Luxury Villa': 'assets/images/luxury-villa_resized.jpg',
      'Cozy Cabin': 'assets/images/cozy-cabin_resized.jpg',
      'Downtown Apartment': 'assets/images/downtown-apartment_resized.jpg'
    };
    return imageMap[title] || originalImage;
  }

  getAddress(title: string): string {
    const addressMap: { [key: string]: string } = {
      'Modern Family Home': '123 Maple Street, Smalltown, WA',
      'Luxury Villa': '567 Sunset Blvd, Beverly Hills, CA',
      'Cozy Cabin': '42 Pine Lane, Mountain View, CO',
      'Downtown Apartment': '89 Main St, Seattle, WA'
    };
    return addressMap[title] || 'Address not available';
  }
}
