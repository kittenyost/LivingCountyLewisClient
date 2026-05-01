import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-leads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-leads.component.html',
  styleUrls: ['./admin-leads.component.css']
})
export class AdminLeadsComponent implements OnInit {
  leads: any[] = [];
  loading = true;
  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadLeads();
  }

  loadLeads(): void {
    this.http.get<any[]>('https://localhost:44351/api/emailleads')
      .subscribe({
        next: (data) => {
          this.leads = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Failed to load leads:', err);
          this.errorMessage = 'Unable to load leads right now.';
          this.loading = false;
        }
      });
  }

  deleteLead(id: number): void {
    if (!confirm('Are you sure you want to delete this lead?')) {
      return;
    }

    this.http.delete(`https://localhost:44351/api/emailleads/${id}`)
      .subscribe({
        next: () => {
          this.leads = this.leads.filter(lead => lead.id !== id);
          this.successMessage = 'Lead deleted successfully.';
          this.errorMessage = '';

          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        },
        error: (err) => {
          console.error('Failed to delete lead:', err);
          alert('Unable to delete lead right now.');
        }
      });
  }
}