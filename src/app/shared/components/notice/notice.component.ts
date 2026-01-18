import { Component, inject } from '@angular/core';
import { SenderService } from '../../constant/senderservice/sender.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {

senderService = inject(SenderService);
senderMessage: string = 'Default Message';

  constructor() { 
    this.senderService.getNoticeMessage().subscribe(message => {
      this.senderMessage = message;
    });
  }
}
