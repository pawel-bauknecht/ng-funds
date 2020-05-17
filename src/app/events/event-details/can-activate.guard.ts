import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root',
})
export class EventDetailsCanActivateGuard implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+next.params['id']);

    if (!eventExists) this.router.navigate(['/404']);

    return eventExists;
  }
}
