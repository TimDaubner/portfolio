import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aot } from './aot';

describe('Aot', () => {
  let component: Aot;
  let fixture: ComponentFixture<Aot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
