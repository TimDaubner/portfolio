import { Component, inject } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import { Input } from './input/input';

@Component({
  selector: 'app-contact-me',
  imports: [Input,TranslatePipe],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss'
})
export class ContactMe {
  private translate = inject(TranslateService);

  mail_img: string = "assets/imgs/contact-me/mail.svg";
  phone_img: string = "assets/imgs/contact-me/phone.svg";
  arrow_img: string = "assets/imgs/contact-me/arrowup.svg";
  toggleImg(property: 'mail_img' | 'phone_img' | 'arrow_img', img: string) {
    this[property] = img;
  }
}
