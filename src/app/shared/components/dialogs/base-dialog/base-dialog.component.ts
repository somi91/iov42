import { Component, EventEmitter, Output } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-base-dialog',
  standalone: true,
  imports: [],
  templateUrl: './base-dialog.component.html',
  styleUrls: ['./base-dialog.component.scss']
})
export class BaseDialogComponent {

  @Output() closeEvent: EventEmitter<void> = new EventEmitter();

  public close() {
    this.closeEvent.emit();
  }
}
