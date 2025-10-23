import { Component } from '@angular/core';

@Component({
  selector: 'app-aot',
  imports: [],
  templateUrl: './aot.html',
  styleUrl: './aot.scss'
})
export class Aot {
  arrowbtn:string = "assets/imgs/arrow-down.svg";
  toggleImg(entered:boolean){
    if(entered){
      this.arrowbtn ="assets/imgs/arrow-down-hover.svg";
      console.log("hover enter");
      
    }
    else{
      this.arrowbtn ="assets/imgs/arrow-down.svg";
      console.log("hover exit");
      
    }
  }
}
