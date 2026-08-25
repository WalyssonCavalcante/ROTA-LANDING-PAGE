import { Injectable, signal, computed } from '@angular/core';
import { PT } from '../../dictionaries/pt';
import { US } from '../../dictionaries/us';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  isLangMenuOpen = signal(false);
  currentLang = signal<'BR' | 'US'>('BR');

  dictionaries = {
    BR: PT,
    US: US
  };

  t = computed(() => this.dictionaries[this.currentLang()]);

  toggleLangMenu() {
    this.isLangMenuOpen.update(open => !open);
  }

  selectLang(lang: 'BR' | 'US') {
    this.currentLang.set(lang);
    this.isLangMenuOpen.set(false);
  }
}
