import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  constructor() { }

  private noticeMessage =  new BehaviorSubject<string>('Default Message');

  setNoticeMessage(message: string) {
    this.noticeMessage.next(message);
  }

  getNoticeMessage(): Observable<string> {
    return this.noticeMessage.asObservable();
  }


  allDataForFilter: any[] = [];

  getDataForFilter(): any {
    return this.allDataForFilter;
  }

  setDataForFilter(data: any): void {
    this.allDataForFilter.push(data);
  }



}
