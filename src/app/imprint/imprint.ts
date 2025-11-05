import { Component, inject } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  imports: [TranslatePipe],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss'
})
export class Imprint {
  private translate = inject(TranslateService);
}
