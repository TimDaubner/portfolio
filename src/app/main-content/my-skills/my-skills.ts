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
  }[] = [
      {
        name: "Angular",
        image: "assets/imgs/my-skills/angular_icon.svg",
      },
      {
        name: "TypeScript",
        image: "assets/imgs/my-skills/typescript_icon.svg",
      },
      {
        name: "JavaScript",
        image: "assets/imgs/my-skills/javascript_icon.svg",
      },
      {
        name: "HTML",
        image: "assets/imgs/my-skills/HTML_icon.svg",
      },
      {
        name: "CSS",
        image: "assets/imgs/my-skills/css_icon.svg",
      },
      {
        name: "REST-API",
        image: "assets/imgs/my-skills/API_icon.svg",
      },
      {
        name: "Firebase",
        image: "assets/imgs/my-skills/firebase_icon.svg",
      },
      {
        name: "Git",
        image: "assets/imgs/my-skills/git_icon.svg",
      },
      {
        name: "Scrum",
        image: "assets/imgs/my-skills/scrum_icon.svg",
      },
      {
        name: "Material design",
        image: "assets/imgs/my-skills/materialdesign_icon.svg",
      },
      {
        name: "Challenge me",
        image: "assets/imgs/my-skills/challengeme_icon.svg",
      },
    ]
}
