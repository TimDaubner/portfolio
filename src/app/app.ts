import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Footer } from "./shared/footer/footer";
import AOS from 'aos';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
   ngAfterViewInit(): void {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic'
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 300);
  }
}
