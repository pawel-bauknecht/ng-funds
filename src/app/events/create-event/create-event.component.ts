import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from '../shared/event.model';
import { EventService } from '../shared';

@Component({
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent {
  isDirty: boolean = true
  newEvent: IEvent

  constructor(
    private eventService: EventService,
    private router: Router
  ) {}

  saveEvent(formValues){
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false
      this.router.navigate(['/events'])
    })
  }

  cancel(): void {
    this.router.navigate(['/events'])
  }
}
