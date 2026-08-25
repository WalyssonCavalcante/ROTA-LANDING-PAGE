import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  public langService = inject(LanguageService);
  public isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
