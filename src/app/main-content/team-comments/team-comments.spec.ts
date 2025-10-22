import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComments } from './team-comments';

describe('TeamComments', () => {
  let component: TeamComments;
  let fixture: ComponentFixture<TeamComments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamComments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamComments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
