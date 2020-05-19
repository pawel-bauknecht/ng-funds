import { Component, Input } from "@angular/core";

@Component({
  selector: 'collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">

      <div>
        <h4>
          <ng-content select="[well-title]"></ng-content>
        </h4>
        <span [ngStyle]="visible && {'transform': 'rotate(180deg)'}" class="caret"></span>
      </div>

      <ng-content *ngIf="visible" select="[well-body]"></ng-content>
    </div>
  `,

  styles: [`
    span {
      float:right;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-top: 12px solid white;
      margin-block-start: 1em;
    }

    h4 {
      display: inline-block;
    }
  `]
})
export class CollapsibleWellComponent {
  @Input() title: string
  visible: boolean = false

  toggleContent(): void {
    this.visible = !this.visible
  }
}
