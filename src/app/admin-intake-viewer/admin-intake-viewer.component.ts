import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-intake-viewer',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './admin-intake-viewer.component.html',
  styleUrls: ['./admin-intake-viewer.component.css']
})
export class AdminIntakeViewerComponent implements OnInit {
  leads: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadLeads();
  }

  loadLeads(): void {
    this.http.get<any[]>('http://localhost:5287/api/emailleads').subscribe({
      next: (data) => {
        console.log('✅ Data received from API:', data);
        this.leads = data;
      },
      error: (err) => {
        console.error('❌ Error loading leads', err);
      }
    });
  }

  deleteLead(id: number): void {
    if (!confirm('Are you sure you want to delete this lead?')) return;

    this.http.delete(`http://localhost:5287/api/emailleads/${id}`).subscribe({
      next: () => {
        console.log(`🗑️ Deleted lead ID ${id}`);
        this.leads = this.leads.filter(lead => lead.id !== id); // Remove from UI
      },
      error: (err) => {
        console.error('🚫 Error deleting lead:', err);
      }
    });
  }
}
