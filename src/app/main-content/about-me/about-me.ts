import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [TranslatePipe],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  private translate = inject(TranslateService);
  gps_img:string = 'assets/imgs/about-me/GPS.svg';
  luggage_img:string = 'assets/imgs/about-me/luggage.svg';
  toggleImg(property: 'gps_img' |'luggage_img', img: string) {
    this[property] = img;
  }
}
