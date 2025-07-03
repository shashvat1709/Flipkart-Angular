import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {
  images = [
   
    '/assets/section2/dff6511cbf3c625e.webp',
    '/assets/section2/82f827fff577f2e8.webp',
    '/assets/section2/dff6511cbf3c625e.webp',
    '/assets/section2/dff6511cbf3c625e.webp',
    '/assets/section2/dff6511cbf3c625e.webp',
    '/assets/section2/dff6511cbf3c625e.webp'
   
  ];

  paused = false;
  pauseOnHover = true;
  pauseOnFocus = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  constructor() {}

  ngOnInit(): void {}
  prevslide() {
  
  }
  nextslide() {

  }
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }
  
  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  trackByImage(index: number, image: string): string {
    return image;
  }
  initializeCarousel() {
    const items: NodeListOf<HTMLElement> = document.querySelectorAll('.carousel .carousel-item');
   
    items.forEach((el: HTMLElement) => {
      const minPerSlide: number = 4;
      let next: HTMLElement | null = el.nextElementSibling as HTMLElement;
 
      for (let i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0] as HTMLElement;
        }
        const cloneChild: HTMLElement = next.cloneNode(true) as HTMLElement;
        el.appendChild(cloneChild.children[0] as HTMLElement);
        next = next.nextElementSibling as HTMLElement;
      }
    });
  }
}
