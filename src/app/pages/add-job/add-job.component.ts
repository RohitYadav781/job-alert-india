import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from 'src/app/services/job.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  jobForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.jobForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      organization: ['', [Validators.required, Validators.minLength(2)]],
      position: ['', [Validators.required, Validators.minLength(2)]],
      qualification: ['', [Validators.required, Validators.minLength(5)]],
      location: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      applyUrl: ['', Validators.required]
    });
  }

  get f() {
    return this.jobForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.jobForm.invalid) {
      this.snackBar.open('Please fill all required fields correctly', 'Close', { duration: 3000 });
      return;
    }

    this.loading = true;

    // Call service to add job
    this.jobService.addJob(this.jobForm.value).subscribe({
      next: (response) => {
        this.loading = false;
        this.snackBar.open('Job posted successfully!', 'Close', { duration: 3000 });
        this.jobForm.reset();
        this.submitted = false;
      },
      error: (error) => {
        this.loading = false;
        console.error('Error posting job:', error);
        this.snackBar.open('Error posting job. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }

  resetForm(): void {
    this.jobForm.reset();
    this.submitted = false;
  }
}
