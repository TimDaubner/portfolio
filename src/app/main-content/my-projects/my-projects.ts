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
    description: "It’s a Kanban-style application designed to manage projects and streamline task completion."
  },
  {
    name: "Pokemon",
    image: "assets/imgs/my-projects/pokedex_project.png",
    skills: ["JavaScript", "HTML", "CSS"],
    description: "A Pokédex application integrated with a third-party API, allowing users to explore all Pokémon along with their stats and additional details."
  },
  {
    name: "Jump Quest",
    image: "assets/imgs/my-projects/jumpquest_project.png",
    skills: ["JavaScript", "HTML", "CSS"],
    description: "Jump Quest is a 2D browser platformer developed with JavaScript. The project demonstrates real-time image rendering, physics-driven motion, and gameplay logic, creating a fully playable and visually engaging experience directly in the browser."
  },
];
}
