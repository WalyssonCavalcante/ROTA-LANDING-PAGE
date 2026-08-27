import { Component, inject, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './services-page.html',
  styleUrl: './services-page.scss'
})
export class ServicesPageComponent implements AfterViewInit {
  public langService = inject(LanguageService);
  private el = inject(ElementRef);

  ngAfterViewInit() {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = this.el.nativeElement.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el: Element) => observer.observe(el));
  }
}
