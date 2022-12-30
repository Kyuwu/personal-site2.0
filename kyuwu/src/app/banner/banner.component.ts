import { trigger, state, style, transition } from '@angular/animations';
import { Component } from '@angular/core';
import { animate } from 'tsparticles-engine';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('fade', [])
  ]
})
export class BannerComponent {
  state = 'shown';

  ngAfterViewInit() {
    setTimeout( () => {
      this.state = 'hidden';
    }, 200);
  }
}
