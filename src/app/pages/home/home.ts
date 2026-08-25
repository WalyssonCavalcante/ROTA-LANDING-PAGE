import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { About } from './components/about/about';
import { Vision } from './components/vision/vision';
import { CarrouselComponent } from './components/carrousel/carrousel';
import { MapComponent } from './components/map/map';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, About, Vision, CarrouselComponent, MapComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
