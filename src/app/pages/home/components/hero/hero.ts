import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
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
  private router = inject(Router);

  goToContact() {
    this.router.navigate(['/contato']).then(() => window.scrollTo(0, 0));
  }

  goToServices() {
    this.router.navigate(['/servicos']).then(() => window.scrollTo(0, 0));
  }
}
