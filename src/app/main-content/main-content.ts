import { Component } from '@angular/core';
import { Aot } from './aot/aot';
import { AboutMe } from './about-me/about-me';
import { MySkills } from './my-skills/my-skills';
import { MyProjects } from './my-projects/my-projects';
import { TeamComments } from './team-comments/team-comments';
import { ContactMe } from './contact-me/contact-me';

@Component({
  selector: 'app-main-content',
  imports: [Aot,AboutMe,MySkills,MyProjects,TeamComments,ContactMe],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}
