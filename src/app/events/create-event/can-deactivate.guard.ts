import { Injectable } from '@angular/core';
import {
  CanDeactivate,
} from '@angular/router';
import { CreateEventComponent } from './create-event.component';

@Injectable({
  providedIn: 'root',
})
export class CreateEventCanDeactivateGuard implements CanDeactivate<CreateEventComponent> {

  canDeactivate(component: CreateEventComponent): boolean {
    if (component.isDirty)
      return window.confirm(
        'You have not saved this event, do you really want to cancel?'
      );
    return true;
  }
}
