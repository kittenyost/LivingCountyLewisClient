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

  checkAdmin(): void {
    this.isAdmin = localStorage.getItem('isAdmin') === 'true';
  }

  logout(): void {
    localStorage.removeItem('isAdmin');
    this.isAdmin = false;
    this.router.navigate(['/']);
  }
}
