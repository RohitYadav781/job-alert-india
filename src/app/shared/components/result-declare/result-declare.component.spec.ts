import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDeclareComponent } from './result-declare.component';

describe('ResultDeclareComponent', () => {
  let component: ResultDeclareComponent;
  let fixture: ComponentFixture<ResultDeclareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultDeclareComponent]
    });
    fixture = TestBed.createComponent(ResultDeclareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
