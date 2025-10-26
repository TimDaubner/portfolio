import { Component } from '@angular/core';

@Component({
  selector: 'app-team-comments',
  imports: [],
  templateUrl: './team-comments.html',
  styleUrl: './team-comments.scss'
})
export class TeamComments {
  colleagues: {
    name: string,
    project_name: string,
    comment: string
  }[] = [
      {
        name: "",
        project_name: "",
        comment: ""
      },
      {
        name: "",
        project_name: "",
        comment: ""
      },
      {
        name: "",
        project_name: "",
        comment: ""
      },
    ]
}
