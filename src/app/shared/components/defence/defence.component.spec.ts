import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenceComponent } from './defence.component';

describe('DefenceComponent', () => {
  let component: DefenceComponent;
  let fixture: ComponentFixture<DefenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefenceComponent]
    });
    fixture = TestBed.createComponent(DefenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
