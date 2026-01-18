import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SenderService } from 'src/app/shared/constant/senderservice/sender.service';

export interface Job {
  id: number;
  postName: string;
  board: string;
  qualification: string;
  advtNo: string;
  postDate: string;
  lastDate: string;
  detailsUrl: string;
  createdAt: string;
  category: string;
  state?: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 senderService = inject(SenderService); 
 searchText = '';
  selectedState = '';

  states: string[] = [
    'All India',
    'Uttar Pradesh',
    'Madhya Pradesh',
    'Bihar',
    'Rajasthan',
    'Delhi',
    'Maharashtra',
    'Gujarat',
    'Punjab',
    'Haryana',
    'West Bengal',
    'Tamil Nadu',
    'Karnataka',
    'Kerala'
  ];

  allJobsList:  Job[]  = [];
  filteredJobsList:  Job[]  = []; // data to show in UI


  constructor(private router: Router) {}

  searchJobs() {
  // Get raw data (array of arrays)
  const rawData = this.senderService.getDataForFilter() || [];

  // 🔹 Flatten data
  const jobs = rawData.flat();

  const search = this.searchText?.toLowerCase().trim();
  const state = this.selectedState?.toLowerCase();

  this.filteredJobsList = jobs.filter((job: Job) => {

    const matchesSearch =
      !search ||
      job.postName?.toLowerCase().includes(search) ||
      job.board?.toLowerCase().includes(search) ||
      job.qualification?.toLowerCase().includes(search) ||
      job.category?.toLowerCase().includes(search);

    const matchesState =
      !state || job.state?.toLowerCase() === state;
      // If API does NOT provide state, this line will safely ignore it

    return matchesSearch && matchesState;
  });

}

}
