import { Component, OnDestroy, OnInit, PLATFORM_ID, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrousel.html',
  styleUrl: './carrousel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarrouselComponent implements OnInit, OnDestroy {
  images = [
    '/carrousel/photo1.svg',
    '/carrousel/photo2.svg',
    '/carrousel/photo3.svg',
    '/carrousel/photo4.svg',
    '/carrousel/photo5.svg',
    '/carrousel/photo6.svg'
  ];
  
  currentIndex = signal(0);
  private intervalId: any;
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startTimer();
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      this.next();
    }, 5000);
  }

  next() {
    this.currentIndex.update(i => (i + 1) % this.images.length);
  }

  setIndex(index: number) {
    this.currentIndex.set(index);
    this.startTimer();
  }
}
