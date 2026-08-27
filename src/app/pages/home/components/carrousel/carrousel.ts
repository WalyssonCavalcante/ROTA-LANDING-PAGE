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
  
  private touchStartX = 0;
  private touchEndX = 0;

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

  prev() {
    this.currentIndex.update(i => (i - 1 + this.images.length) % this.images.length);
  }

  setIndex(index: number) {
    this.currentIndex.set(index);
    this.startTimer();
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const swipeThreshold = 50; // minimum pixels to be considered a swipe
    if (this.touchEndX < this.touchStartX - swipeThreshold) {
      // Swiped left -> next image
      this.next();
      this.startTimer(); // reset timer
    } else if (this.touchEndX > this.touchStartX + swipeThreshold) {
      // Swiped right -> prev image
      this.prev();
      this.startTimer(); // reset timer
    }
  }
}
