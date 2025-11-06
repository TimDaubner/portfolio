import { Component, inject } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  private translate = inject(TranslateService);
  git_img:string = 'assets/imgs/footer/git.svg';
  mail_img:string = 'assets/imgs/footer/mail.svg';
  linkedin_img:string = 'assets/imgs/footer/linkedin.svg';
  toggleImg(property: 'git_img' | 'mail_img' | 'linkedin_img', img: string){
    this[property] = img;
  }
}
