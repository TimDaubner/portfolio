import { Component, inject } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-team-comments',
  imports: [TranslatePipe],
  templateUrl: './team-comments.html',
  styleUrl: './team-comments.scss'
})
export class TeamComments {
  private translate = inject(TranslateService);

  colleagues: {
    name: string,
    project_name: string,
    comment: string
  }[] = [
      {
        name: "Noah Mueller",
        project_name: "Project Jump Quest",
        comment: "team-comments.first"
      },
      {
        name: "Evelyn Marx",
        project_name: "Project Pollo Loco",
        comment: "team-comments.second"
      },
      {
        name: "James Rugman",
        project_name: "Project Join",
        comment: "team-comments.third"
      },
    ]
}
