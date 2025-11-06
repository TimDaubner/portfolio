import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, NgClass, NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }

  menu_img :string = "assets/imgs/header/burger_menu.svg";
  isMenuHidden : boolean = true;
  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
    if(this.isMenuHidden){
      this.menu_img =  "assets/imgs/header/burger_menu.svg"
    }
    else{
      this.menu_img =  "assets/imgs/header/burger_menu_close.svg"
    }
  }
}
