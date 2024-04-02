import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseDialogComponent } from 'src/app/shared/components/dialogs/base-dialog/base-dialog.component';
import { TextInputComponent } from 'src/app/shared/components/inputs/text-input/text-input.component';
import { CoreService } from 'src/app/shared/services/core.service';

export interface CreateBookingDD {
  screeningId: number;
}

@Component({
  selector: 'app-create-edit-booking',
  standalone: true,
  imports: [BaseDialogComponent, TextInputComponent, ReactiveFormsModule],
  templateUrl: './create-edit-booking.component.html',
  styleUrls: ['./create-edit-booking.component.scss']
})
export class CreateEditBookingComponent {

  public readonly nameField = "seat";

  public form: FormGroup = new FormGroup({
    [this.nameField]: new FormControl(null, Validators.required)
  });

  constructor(private dialogRef: DialogRef, 
    private coreSrv: CoreService,
    @Inject(DIALOG_DATA) public data: CreateBookingDD) {}

  public onClose() {
    this.dialogRef.close();
  }
  public async submit() {
    if(this.form.invalid) {
      return;
    }
    const res = await this.coreSrv.createBooking({screeningId: this.data.screeningId, seat: +this.form.value.seat});
    this.dialogRef.close(res);
  }

}

