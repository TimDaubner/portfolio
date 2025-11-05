import { Component, inject } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-team-comments',
  imports: [],
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
        comment: "‘’Marcus had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’"
      },
      {
        name: "Evelyn Marx",
        project_name: "Project Pollo Loco",
        comment: "‘’ He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code. ‘’"
      },
      {
        name: "James Rugman",
        project_name: "Project Join",
        comment: "‘’ He is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.’’"
      },
    ]
}
