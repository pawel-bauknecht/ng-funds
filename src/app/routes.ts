import { Routes } from '@angular/router';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateEventCanDeactivateGuard,
  EventResolver,
  } from './events';
import { Error404Component } from './errors/error-404.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';

export const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: [CreateEventCanDeactivateGuard],
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: { event: EventResolver }
  },
  {
    path: 'events/session/new',
    component: CreateSessionComponent
  },
  {
    path: 'user',
    loadChildren: () => import(`./user/user.module`).then(m => m.UserModule)
  },

  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];
