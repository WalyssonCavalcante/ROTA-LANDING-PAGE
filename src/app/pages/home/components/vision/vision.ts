import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-vision',
  styleUrl: './vision.scss',
  templateUrl: './vision.html',
})
export class Vision {
  public langService = inject(LanguageService);
}
