import { Component, inject } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-aot',
  imports: [TranslatePipe],
  templateUrl: './aot.html',
  styleUrl: './aot.scss'
})
export class Aot {
  private translate = inject(TranslateService);

  arrowbtn:string = "assets/imgs/arrow-down.svg";
  toggleImg(entered:boolean){
    if(entered){
      this.arrowbtn ="assets/imgs/arrow-down-hover.svg";
    }
    else{
      this.arrowbtn ="assets/imgs/arrow-down.svg";
    }
  }
}
