import { Component, inject } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { SenderService } from '../../constant/senderservice/sender.service';

@Component({
  selector: 'app-defence',
  templateUrl: './defence.component.html',
  styleUrls: ['./defence.component.css']
})
export class DefenceComponent {
  JobService = inject(JobService);
  senderService = inject(SenderService); 

  Jobs: any[] = [];
  showAll = false;

  constructor() {
    this.getBankJobs();
  }

  getBankJobs() {
    this.JobService.getBankJobs('defence').subscribe(res => {
      this.Jobs = res.data || [];
      this.senderService.setDataForFilter(this.Jobs);
      this.senderService.setNoticeMessage(this.Jobs[1].board + ' ' + this.Jobs[1].postName+ ' is Live');
    });
  }

  // ✅ show only 8 or all
  get displayedJobs() {
    return this.showAll ? this.Jobs : this.Jobs.slice(0, 8);
  }

  // ✅ toggle view
  toggleViewAll() {
    this.showAll = !this.showAll;
  }
}
