import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;

  constructor() {}

  ngOnInit(): void {}

  // Time Style Logic
  getTimeStyle() {
    if (this.event && this.event.time === '8:00 am')
      return { color: '#003300', 'font-weight': 'bold' };
    else return {};
  }
}
