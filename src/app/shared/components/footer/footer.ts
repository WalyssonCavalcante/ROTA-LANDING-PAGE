import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  standalone: true,
  imports: [IconComponent, RouterModule],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class FooterComponent {}
