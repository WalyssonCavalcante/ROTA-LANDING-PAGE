import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  public langService = inject(LanguageService);
}
