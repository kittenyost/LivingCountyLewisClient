import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../services/listings.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Needed for ngModel

@Component({
  selector: 'app-listing-details',
  standalone: true,
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css'],
  imports: [CommonModule, RouterModule, FormsModule] // ✅ Added FormsModule here
})
export class ListingDetailsComponent implements OnInit {
  listingId: number | null = null;
  listing: any = null;
  similarListings: any[] = [];
  email: string = ''; // ✅ For notify input

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService
  ) { }

  ngOnInit() {
    this.listingId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('📌 Listing ID:', this.listingId);

    if (this.listingId !== null) {
      this.listingsService.getListings().subscribe((data: any[]) => {
        console.log("📌 Fetched API Listings in Details Page:", JSON.stringify(data, null, 2));

        if (!data.some(l => l.id === 4)) {
          data.push({
            id: 4,
            title: "Downtown Apartment",
            price: 450000,
            description: "Modern apartment in the heart of downtown.",
            address: "89 Main St, Seattle, WA",
            image: "assets/images/downtown-apartment_resized.jpg"
          });
        }

        this.listing = data.find(l => l.id === this.listingId);

        if (this.listing) {
          this.listing.image = this.getLocalImage(this.listing.title);
          this.listing.address = this.getAddress(this.listing.title);
          console.log('✅ Updated Selected Listing:', JSON.stringify(this.listing, null, 2));

          this.similarListings = data
            .filter(l => l.id !== this.listingId)
            .slice(0, 3);
        } else {
          console.error('🚨 Listing NOT FOUND in Details Page:', this.listingId);
        }
      });
    }
  }

  // ✅ Assign Correct Image Paths
  getLocalImage(title: string): string {
    const imageMap: { [key: string]: string } = {
      "Luxury Villa": "assets/images/luxury-villa_resized.jpg",
      "Modern Family Home": "assets/images/modern-familyhome_resized.jpg",
      "Cozy Cabin": "assets/images/cozy-cabin_resized.jpg",
      "Downtown Apartment": "assets/images/downtown-apartment_resized.jpg"
    };
    return imageMap[title] || "https://source.unsplash.com/featured/?house";
  }

  // ✅ Assign Correct Addresses
  getAddress(title: string): string {
    const addressMap: { [key: string]: string } = {
      "Luxury Villa": "567 Sunset Blvd, Beverly Hills, CA",
      "Modern Family Home": "123 Maple Street, Smalltown, WA",
      "Cozy Cabin": "42 Pine Lane, Mountain View, CO",
      "Downtown Apartment": "89 Main St, Seattle, WA"
    };
    return addressMap[title] || "Address not available";
  }

  // ✅ Google Maps URL Generator
  getGoogleMapsUrl(address: string): string {
    if (!address) return '#';
    return `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
  }

  // ✅ Submit Email to Backend
  submitEmail() {
    if (!this.email || !this.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    const payload = { email: this.email };

    fetch('http://localhost:5287/api/EmailLeads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.ok) {
          alert('📬 Thanks! We’ll notify you when new listings are available.');
          this.email = '';
        } else {
          alert('❌ Something went wrong. Please try again later.');
        }
      })
      .catch(() => {
        alert('❌ Could not reach the server. Please try again later.');
      });
  }
}


