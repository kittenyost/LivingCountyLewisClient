import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (!isAdmin) {
      alert('Access denied. Admins only.');  // ✅ You can replace this with a toast later
      this.router.navigate(['/admin-login']); // ✅ Redirect to login
      return false;
    }
    return true;
  }
}
