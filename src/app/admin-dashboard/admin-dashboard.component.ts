import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="admin">
      <h2>📋 Admin Dashboard - Manage Listings</h2>

      <!-- Create New Listing -->
      <div class="form">
        <h3>Add New Listing</h3>
        <input [(ngModel)]="newListing.title" placeholder="Title" />
        <input [(ngModel)]="newListing.price" placeholder="Price" type="number" />
        <input [(ngModel)]="newListing.address" placeholder="Address" />
        <input [(ngModel)]="newListing.image" placeholder="Image URL" />
        <textarea [(ngModel)]="newListing.description" placeholder="Description"></textarea>
        <button (click)="addListing()">Add Listing</button>
      </div>

      <!-- List of Listings -->
      <div class="listings">
        <div *ngFor="let listing of listings" class="listing-card">
          <img [src]="listing.image" alt="{{ listing.title }}" />
          <h4>{{ listing.title }}</h4>
          <p><strong>Price:</strong> \${{ listing.price }}</p>
          <p><strong>Address:</strong> {{ listing.address }}</p>
          <p>{{ listing.description }}</p>
          <button (click)="removeListing(listing.id)">Remove</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .admin {
      padding: 2rem;
    }
    .form input, .form textarea {
      display: block;
      margin: 0.5rem 0;
      padding: 0.5rem;
      width: 100%;
    }
    .listings {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1rem;
      margin-top: 2rem;
    }
    .listing-card {
      background: #f9f9f9;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    .listing-card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      margin-bottom: 0.5rem;
      border-radius: 6px;
    }
  `]
})
export class AdminDashboardComponent {
  listings = [
    {
      id: 1,
      title: 'Sample Home',
      price: 350000,
      address: '123 Main St',
      image: 'assets/images/modern-familyhome_resized.jpg',
      description: 'This is a sample listing.'
    }
  ];

  newListing = {
    id: 0,
    title: '',
    price: 0,
    address: '',
    image: '',
    description: ''
  };

  addListing() {
    const newId = this.listings.length ? Math.max(...this.listings.map(l => l.id)) + 1 : 1;
    this.listings.push({ ...this.newListing, id: newId });
    this.newListing = { id: 0, title: '', price: 0, address: '', image: '', description: '' };
  }

  removeListing(id: number) {
    this.listings = this.listings.filter(listing => listing.id !== id);
  }
} 
