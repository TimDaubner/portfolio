import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  imports: [],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss'
})


export class MySkills {
  skills: {
    name: string;
    image: string;
  }[] = [{
    name: "Angular",
    image: "",
  },
{
    name: "Angular",
    image: "",
  },
  {
    name: "TypeScript",
    image: "",
  },
  {
    name: "JavaScript",
    image: "",
  },
  {
    name: "HTML",
    image: "",
  },
  {
    name: "CSS",
    image: "",
  },
  {
    name: "REST-API",
    image: "",
  },
  {
    name: "Firebase",
    image: "",
  },
  {
    name: "Git",
    image: "",
  },
  {
    name: "Scrum",
    image: "",
  },
  {
    name: "Material design",
    image: "",
  },
  {
    name: "Challenge me",
    image: "",
  },
]
}
