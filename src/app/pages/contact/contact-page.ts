import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPageComponent {
  public langService = inject(LanguageService);
}
