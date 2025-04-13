import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAdmin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkAdmin();
  }

  ngDoCheck(): void {
    this.checkAdmin(); // ✅ runs on every change detection cycle
  }

  checkAdmin(): void {
    this.isAdmin = !!localStorage.getItem('adminToken'); // ✅ this detects login status
  }

  logout(): void {
    localStorage.removeItem('adminToken');
    this.isAdmin = false;
    this.router.navigate(['/']);
    alert('You have been logged out.');
  }
}
