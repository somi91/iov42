import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseDialogComponent } from 'src/app/shared/components/dialogs/base-dialog/base-dialog.component';
import { TextInputComponent } from 'src/app/shared/components/inputs/text-input/text-input.component';
import { Screening, ScreeningRequestData } from 'src/app/shared/interfaces/screening';
import { CoreService } from 'src/app/shared/services/core.service';

export interface CreateScreeningDD extends Omit<ScreeningRequestData, "startTime"> {
}


@Component({
  selector: 'app-create-edit-screening',
  standalone: true,
  imports: [BaseDialogComponent, TextInputComponent, ReactiveFormsModule],
  templateUrl: './create-edit-screening.component.html',
  styleUrls: ['./create-edit-screening.component.scss']
})
export class CreateEditScreeningComponent {

  public readonly startTimeField = "startTime";

  public form: FormGroup = new FormGroup({
    [this.startTimeField]: new FormControl(null, Validators.required)
  });

  constructor(private dialogRef: DialogRef, 
    private coreSrv: CoreService,
    @Inject(DIALOG_DATA) public data: CreateScreeningDD) {}

  public onClose() {
    this.dialogRef.close();
  }
  public async submit() {
    if(this.form.invalid) {
      return;
    }
    const res = await this.coreSrv.createScreening({...this.form.value, ...this.data});
    this.dialogRef.close(res);
  }

}