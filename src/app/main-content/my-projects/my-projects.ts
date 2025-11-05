import { Component, inject } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-my-projects',
  imports: [TranslatePipe],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss'
})
export class MyProjects {
  private translate = inject(TranslateService);
  
  projects: {
    name: string,
    image: string,
    skills: string[],
    description: string,
  }[] = [{
    name: "Join",
    image: "assets/imgs/my-projects/join_project.png",
    skills: ["Angular", "Typescript", "HTML", "CSS", "Firebase"],
    description: "my-projects.join.description"
  },
  {
    name: "Pokédex",
    image: "assets/imgs/my-projects/pokedex_project.png",
    skills: ["JavaScript", "HTML", "CSS"],
    description: "my-projects.pokedex.description"
  },
  {
    name: "Jump Quest",
    image: "assets/imgs/my-projects/jumpquest_project.png",
    skills: ["JavaScript", "HTML", "CSS"],
    description: "my-projects.jumpquest.description"
  },
];
}
