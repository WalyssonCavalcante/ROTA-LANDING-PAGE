import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class HeroComponent {
  public langService = inject(LanguageService);
}
