import { Component, EventEmitter, inject, Output } from '@angular/core';
import { SenderService } from '../../constant/senderservice/sender.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  q = '';
    senderService = inject(SenderService); 
  // @Output() search = new EventEmitter<string>();


  ngOnInit() {
        console.log('Search query submitted:', this.q);
  }

  submit() {
    console.log('Search query submitted:', this.q);
    var dataForFilter = this.senderService.getDataForFilter();
    console.log('Data for Filter:', dataForFilter);
    // this.search.emit(this.q);
  }
}
