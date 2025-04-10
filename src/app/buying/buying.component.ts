import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-buying',
  standalone: true,
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.css'],
  imports: [CommonModule, RouterModule]
})
export class BuyingComponent { }
