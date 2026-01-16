import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-team-comments',
  imports: [TranslatePipe, NgStyle],
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
        comment: "team-comments.first"
      },
      {
        name: "Evelyn Marx",
        project_name: "Project Pollo Loco",
        comment: "team-comments.second"
      },
      {
        name: "James Rugman",
        project_name: "Project Join",
        comment: "team-comments.third"
      },
    ]

  isDragging: boolean = false;
  startX: number = 0;
  currentX: number = 0;
  halfWidth: number = 0;
  frame_bot = {
    left: '0px',
    top: '0px',
    position: 'relative',
    cursor: 'cursor'
  };

  clamp(value: number, min: number, max: number): number { // ✅ added
    return Math.min(Math.max(value, min), max); // ✅ added
  }

  getClientX(e: MouseEvent | TouchEvent) {
    if (e instanceof MouseEvent) {
      return e.clientX;
    } else if (e instanceof TouchEvent) {
      return e.touches[0].clientX;
    }
    return 0;
  }

  isDesktop(): boolean {
    return window.matchMedia('(max-width: 900px)').matches;
  }

  down(e: MouseEvent | TouchEvent, frameElement: HTMLElement) {
    if (!this.isDesktop()) return;

    e.preventDefault();
    this.isDragging = true;
    this.startX = this.getClientX(e);
    this.halfWidth = frameElement.offsetWidth / 2;
    this.frame_bot.cursor = 'grabbing';
  }

  move(e: MouseEvent | TouchEvent) {
    if (!this.isDesktop() || !this.isDragging) return;
    if (!this.isDragging) return;
    e.preventDefault();

    const dx = this.getClientX(e) - this.startX;
    this.currentX += dx;
    this.currentX = this.clamp(this.currentX, -this.halfWidth, this.halfWidth);
    this.frame_bot.left = `${this.currentX}px`;
    this.startX = this.getClientX(e);
  }

  up(e: MouseEvent | TouchEvent) {
    if (!this.isDesktop()) return;
    this.isDragging = false;
    this.frame_bot.cursor = 'grab';
  }
}
