import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseDialogComponent } from 'src/app/shared/components/dialogs/base-dialog/base-dialog.component';
import { TextInputComponent } from 'src/app/shared/components/inputs/text-input/text-input.component';
import { CoreService } from 'src/app/shared/services/core.service';

@Component({
  selector: 'app-create-edit-cinema',
  standalone: true,
  imports: [BaseDialogComponent, TextInputComponent, ReactiveFormsModule],
  templateUrl: './create-edit-cinema.component.html',
  styleUrls: ['./create-edit-cinema.component.scss']
})
export class CreateEditCinemaComponent {

  public readonly nameField = "name";

  public form: FormGroup = new FormGroup({
    [this.nameField]: new FormControl("", Validators.required)
  });

  constructor(private dialogRef: DialogRef, private coreSrv: CoreService) {}

  public onClose() {
    this.dialogRef.close();
  }
  public async submit() {
    if(this.form.invalid) {
      return;
    }
    const res = await this.coreSrv.createCinema(this.form.value);
    this.dialogRef.close(res);
  }

}
