import { Component, inject } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { SenderService } from '../../constant/senderservice/sender.service';

@Component({
  selector: 'app-railway',
  templateUrl: './railway.component.html',
  styleUrls: ['./railway.component.css']
})
export class RailwayComponent {
  JobService = inject(JobService);
  senderService = inject(SenderService); 
  
  BankJobs: any[] = [];
  showAll = false;

  constructor() {
    this.getBankJobs();
  }

  getBankJobs() {
    this.JobService.getBankJobs('Railways').subscribe(res => {
      this.BankJobs = res.data || [];
       this.senderService.setDataForFilter(this.BankJobs);
      console.log('Bank Jobs:', this.BankJobs);
    });
  }

  // ✅ show only 8 or all
  get displayedJobs() {
    return this.showAll ? this.BankJobs : this.BankJobs.slice(0, 8);
  }

  // ✅ toggle view
  toggleViewAll() {
    this.showAll = !this.showAll;
  }

}
