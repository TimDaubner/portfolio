import { Component } from '@angular/core';
import { Input } from './input/input';

@Component({
  selector: 'app-contact-me',
  imports: [Input],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss'
})
export class ContactMe {
  mail_img: string = "assets/imgs/contact-me/mail.svg";
  phone_img: string = "assets/imgs/contact-me/phone.svg";
  arrow_img: string = "assets/imgs/contact-me/arrowup.svg";
  toggleImg(property: 'mail_img' | 'phone_img' | 'arrow_img', img: string) {
    this[property] = img;
  }
}
