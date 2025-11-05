import { Component, inject } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-policy',
  imports: [TranslatePipe],
  templateUrl: './policy.html',
  styleUrl: './policy.scss'
})
export class Policy {
  private translate = inject(TranslateService);
}
