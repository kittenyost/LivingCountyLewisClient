import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FinancingComponent } from './financing/financing.component';
import { BuyingComponent } from './buying/buying.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminIntakeViewerComponent } from './admin-intake-viewer/admin-intake-viewer.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthGuard } from './auth.guard';

const ListingsComponent = () => import('./listings/listings.component').then(m => m.ListingsComponent);
const ToolkitComponent = () => import('./toolkit/toolkit.component').then(m => m.ToolkitComponent);

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listings', loadComponent: ListingsComponent },
  { path: 'listings/:id', component: ListingDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'financing', component: FinancingComponent },
  { path: 'buying', component: BuyingComponent },

  // 🔹 Local Areas
  { path: 'local/centralia', loadComponent: () => import('./local-areas/centralia/centralia.component').then(m => m.CentraliaComponent) },
  { path: 'local/chehalis', loadComponent: () => import('./local-areas/chehalis/chehalis.component').then(m => m.ChehalisComponent) },
  { path: 'local/tumwater', loadComponent: () => import('./local-areas/tumwater/tumwater.component').then(m => m.TumwaterComponent) },
  { path: 'local/olympia', loadComponent: () => import('./local-areas/olympia/olympia.component').then(m => m.OlympiaComponent) },
  { path: 'local/lacey', loadComponent: () => import('./local-areas/lacey/lacey.component').then(m => m.LaceyComponent) },
  { path: 'local/aberdeen', loadComponent: () => import('./local-areas/aberdeen/aberdeen.component').then(m => m.AberdeenComponent) },
  { path: 'local/montesano', loadComponent: () => import('./local-areas/montesano/montesano.component').then(m => m.MontesanoComponent) },
  { path: 'local/elma', loadComponent: () => import('./local-areas/elma/elma.component').then(m => m.ElmaComponent) },
  { path: 'local/oakville', loadComponent: () => import('./local-areas/oakville/oakville.component').then(m => m.OakvilleComponent) },
  { path: 'local/rochester', loadComponent: () => import('./local-areas/rochester/rochester.component').then(m => m.RochesterComponent) },

  // 🔐 Admin Routes
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin/intake-viewer', component: AdminIntakeViewerComponent, canActivate: [AuthGuard] },
  { path: 'toolkit', loadComponent: ToolkitComponent, canActivate: [AuthGuard] }, // 🔐 Restricted too

  // 🌐 Fallback
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);



