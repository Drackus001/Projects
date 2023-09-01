import { Component, Input } from '@angular/core';

@Component({
  selector: 'print-input-error',
  templateUrl: './print-input-error.component.html',
  styleUrls: ['./print-input-error.component.scss'],
})
export class PrintInputErrorComponent {
  @Input('control') control: any;
}
