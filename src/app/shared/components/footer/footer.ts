import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  standalone: true,
  imports: [IconComponent],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class FooterComponent {}
