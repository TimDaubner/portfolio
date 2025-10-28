import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  imports: [],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss'
})
export class MyProjects {
  projects: {
    name: string,
    image: string,
    skills: string[],
    description: string,
  }[] = [{
    name: "Join",
    image: "assets/imgs/my-projects/join_project.png",
    skills: ["Angular", "Typescript", "HTML", "CSS", "Firebase"],
    description: "Loremp Ipsum"
  },
  {
    name: "Pokemon",
    image: "assets/imgs/my-projects/pokedex_project.png",
    skills: [""],
    description: "Loremp Ipsum"
  },
  {
    name: "Jump Quest",
    image: "assets/imgs/my-projects/jumpquest_project.png",
    skills: ["JavaScript", "HTML", "CSS"],
    description: "Loremp Ipsum"
  },
];
}
