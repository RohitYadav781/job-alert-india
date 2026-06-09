import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobComponent } from './add-job.component';

describe('AddJobComponent', () => {
  let component: AddJobComponent;
  let fixture: ComponentFixture<AddJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty fields', () => {
    expect(component.jobForm.get('title')?.value).toBe('');
    expect(component.jobForm.get('position')?.value).toBe('');
    expect(component.jobForm.get('qualification')?.value).toBe('');
  });

  it('should show validation errors when submitted without data', () => {
    component.onSubmit();
    expect(component.submitted).toBe(true);
    expect(component.jobForm.valid).toBe(false);
  });

  it('should disable submit button when loading', () => {
    component.loading = true;
    fixture.detectChanges();
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton.disabled).toBe(true);
  });
});
