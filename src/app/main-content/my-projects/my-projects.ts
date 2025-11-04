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
    description: "Loremp Ipsum"
  },
];
}
