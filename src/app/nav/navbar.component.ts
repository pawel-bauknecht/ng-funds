import { Component } from '@angular/core';
import { AuthService } from '../user/login/auth.service';
import { ISession } from '../events/shared/event.model';
import { EventService } from '../events';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchTerm: string = ""
  foundSessions: ISession[]

  constructor(
    public auth: AuthService,
    private eventService: EventService
  ) {}

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      }
    )
  }
}
