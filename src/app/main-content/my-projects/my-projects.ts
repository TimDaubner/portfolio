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
    skills: string[],
    description: string,
  }[] = [{
    name: "Join",
    skills: ["Angular","Typescript","HTML","CSS","Firebase"],
    description: "Loremp Ipsum"
  },
{
    name: "Pokemon",
    skills: [""],
    description: "Loremp Ipsum"
  },
{
    name: "Jump Quest",
    skills: ["JavaScript","HTML","CSS"],
    description: "Loremp Ipsum"
  },
];
}
