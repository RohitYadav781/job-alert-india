import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';

export interface Job {
  id: number;
  title: string;
  organization: string;
  location: string;
  postDate: string;
  description: string;
  applyUrl?: string;
}

@Injectable({ providedIn: 'root' })
export class JobService {

private baseUrl = environment.apiUrl;

  private jobs: Job[] = [
    { id: 1, title: 'SSC CGL - Junior Accountant', organization: 'Staff Selection Commission', location: 'All India', postDate: '2026-01-01', description: 'Recruitment for Junior Accountants in various departments.', applyUrl: '#' },
    { id: 2, title: 'Bank PO', organization: 'State Bank of India', location: 'Mumbai', postDate: '2026-01-02', description: 'Probationary Officer posts across branches.', applyUrl: '#' },
    { id: 3, title: 'Railway Technician', organization: 'Indian Railways', location: 'Delhi', postDate: '2026-01-03', description: 'Technician posts in various zones.', applyUrl: '#' }
  ];

  constructor(private http: HttpClient) {
  }

  getJobs(): Observable<Job[]> {
    return of(this.jobs);
  }

  getJob(id: number): Observable<Job | undefined> {
    const job = this.jobs.find(j => j.id === id);
    return of(job);
  }

  search(query: string): Observable<Job[]> {
    if (!query) {
      return of(this.jobs);
    }
    const q = query.toLowerCase();
    const results = this.jobs.filter(j =>
      j.title.toLowerCase().includes(q) ||
      j.organization.toLowerCase().includes(q) ||
      j.location.toLowerCase().includes(q)
    );
    return of(results);
  }


  getBankJobs(Category:any): Observable<any> {
    const bankJobs = this.http.get<any>(`${this.baseUrl}GetJobs?category=${Category}`);
    return bankJobs;
  }


}
