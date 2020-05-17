import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(['/events']);
  }
}
