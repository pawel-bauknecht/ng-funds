import { Routes } from '@angular/router';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateEventCanDeactivateGuard,
  EventDetailsCanActivateGuard,
  } from './events';
import { Error404Component } from './errors/error-404.component';

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
    canActivate: [EventDetailsCanActivateGuard],
  },
  { path: 'user',
    loadChildren: () => import(`./user/user.module`).then(m => m.UserModule)
  },

  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];
