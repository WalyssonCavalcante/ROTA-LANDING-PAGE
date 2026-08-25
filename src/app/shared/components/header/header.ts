import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  public langService = inject(LanguageService);
  private router = inject(Router);
  public isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollTo(sectionId: string, event: Event) {
    event.preventDefault();
    
    if (sectionId === 'home') {
      if (this.router.url !== '/') {
        this.router.navigate(['/']).then(() => window.scrollTo(0, 0));
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      this.doScroll(element);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) this.doScroll(el);
        }, 100);
      });
    }
  }

  goToAbout(event: Event) {
    event.preventDefault();
    this.router.navigate(['/sobre']).then(() => window.scrollTo(0, 0));
  }

  private doScroll(element: HTMLElement) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  }
}
