import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListingsService } from '../services/listings.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listings',
  standalone: true,
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class ListingsComponent implements OnInit {
  listings: any[] = [];
  searchQuery: string = '';
  selectedType: string = '';
  selectedPriceRange: string = '';
  sortOption: string = '';
  listingTypes: string[] = ['House', 'Apartment', 'Villa', 'Cabin'];
  isDarkMode: boolean = false;
  email: string = '';

  currentPage: number = 1;
  listingsPerPage: number = 6;

  constructor(private listingsService: ListingsService) { }

  ngOnInit() {
    this.listingsService.getListings().subscribe(
      (data: any[]) => {
        const predefinedListings = [
          {
            id: 1,
            title: "Modern Family Home",
            type: "House",
            price: 350000,
            description: "A beautiful 3-bedroom home.",
            address: "123 Maple St, Smalltown, WA",
            image: "assets/images/modern-familyhome_resized.jpg"
          },
          {
            id: 2,
            title: "Luxury Villa",
            type: "Villa",
            price: 950000,
            description: "A luxurious villa with a private pool.",
            address: "456 Oceanview Dr, Miami, FL",
            image: "assets/images/luxury-villa_resized.jpg"
          },
          {
            id: 3,
            title: "Cozy Cabin",
            type: "Cabin",
            price: 220000,
            description: "A peaceful retreat in the woods.",
            address: "789 Pine Tree Ln, Aspen, CO",
            image: "assets/images/cozy-cabin_resized.jpg"
          },
          {
            id: 4,
            title: "Downtown Apartment",
            type: "Apartment",
            price: 450000,
            description: "Modern apartment in the heart of downtown.",
            address: "321 Cityview Blvd, New York, NY",
            image: "assets/images/downtown-apartment_resized.jpg"
          }
        ];

        const mergedListings = data.map(apiListing => {
          const match = predefinedListings.find(p => p.title === apiListing.title);
          return {
            ...apiListing,
            image: match?.image || this.getLocalImage(apiListing.title),
            address: match?.address || this.getAddress(apiListing.title),
            type: match?.type || apiListing.type || 'House'
          };
        });

        predefinedListings.forEach(predef => {
          if (!mergedListings.some(l => l.title === predef.title)) {
            mergedListings.push(predef);
          }
        });

        this.listings = mergedListings;

        console.log('✅ Final listings loaded into Angular (all included):', this.listings);
      },
      (error) => {
        console.error("🚨 Error fetching listings:", error);
      }
    );

    this.isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
    localStorage.setItem('darkMode', this.isDarkMode ? 'enabled' : '');
  }

  resetFilters() {
    this.searchQuery = '';
    this.selectedType = '';
    this.selectedPriceRange = '';
    this.sortOption = '';
    this.currentPage = 1;
  }

  filteredListings() {
    let filtered = this.listings.filter((listing) => {
      const matchesSearch = this.searchQuery.trim()
        ? listing.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(this.searchQuery.toLowerCase())
        : true;

      const matchesType = this.selectedType ? listing.type === this.selectedType : true;
      const matchesPrice = this.matchesPriceRange(listing);

      return matchesSearch && matchesType && matchesPrice;
    });

    if (this.sortOption === 'lowToHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'highToLow') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }

  private matchesPriceRange(listing: any): boolean {
    if (this.selectedPriceRange === 'low') return listing.price < 250000;
    if (this.selectedPriceRange === 'mid') return listing.price >= 250000 && listing.price <= 500000;
    if (this.selectedPriceRange === 'high') return listing.price > 500000;
    return true;
  }

  getPagedListings() {
    const filtered = this.filteredListings();
    const start = (this.currentPage - 1) * this.listingsPerPage;
    return filtered.slice(start, start + this.listingsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredListings().length / this.listingsPerPage);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.scrollToTop();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.scrollToTop();
    }
  }

  getPlaceholderCards(): any[] {
    const realCount = this.getPagedListings().length;
    const totalTarget = 8;
    const needed = totalTarget - realCount;

    const types = ['Cabin', 'Apartment', 'House', 'Villa'];
    return Array.from({ length: needed }).map((_, i) => ({
      type: types[i % types.length]
    }));
  }

  onNotify() {
    alert("📬 Thanks! We'll notify you when new listings are available.");
  }

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
          alert('📬 Thank you! You’ll be notified about new listings.');
          this.email = '';
        } else {
          alert('❌ Something went wrong. Please try again later.');
        }
      })
      .catch(() => alert('❌ Could not reach the server. Please try again later.'));
  }

  viewDetails(listing: any) {
    console.log("📌 Viewing details for:", listing);
  }

  getLocalImage(title: string): string {
    const imageMap: { [key: string]: string } = {
      "Luxury Villa": "assets/images/luxury-villa_resized.jpg",
      "Modern Family Home": "assets/images/modern-familyhome_resized.jpg",
      "Cozy Cabin": "assets/images/cozy-cabin_resized.jpg",
      "Downtown Apartment": "assets/images/downtown-apartment_resized.jpg"
    };
    return imageMap[title] || "https://source.unsplash.com/featured/?house";
  }

  getAddress(title: string): string {
    const addressMap: { [key: string]: string } = {
      "Luxury Villa": "567 Sunset Blvd, Beverly Hills, CA",
      "Modern Family Home": "123 Maple Street, Smalltown, WA",
      "Cozy Cabin": "42 Pine Lane, Mountain View, CO",
      "Downtown Apartment": "89 Main St, Seattle, WA"
    };
    return addressMap[title] || "Address not available";
  }
}
