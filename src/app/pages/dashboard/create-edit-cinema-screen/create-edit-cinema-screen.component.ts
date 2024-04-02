import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseDialogComponent } from 'src/app/shared/components/dialogs/base-dialog/base-dialog.component';
import { TextInputComponent } from 'src/app/shared/components/inputs/text-input/text-input.component';
import { CoreService } from 'src/app/shared/services/core.service';

export interface CreateCinemaScreenDD {
  cinemaId: number;
  name: string;
}

@Component({
  selector: 'app-create-edit-screen',
  standalone: true,
  imports: [BaseDialogComponent, TextInputComponent, ReactiveFormsModule],
  templateUrl: './create-edit-cinema-screen.component.html',
  styleUrls: ['./create-edit-cinema-screen.component.scss']
})
export class CreateEditCinemaScreenComponent {

  public readonly nameField = "name";

  public form: FormGroup = new FormGroup({
    [this.nameField]: new FormControl("", Validators.required)
  });

  constructor(private dialogRef: DialogRef, 
    private coreSrv: CoreService,
    @Inject(DIALOG_DATA) public data: CreateCinemaScreenDD) {}

  public onClose() {
    this.dialogRef.close();
  }
  public async submit() {
    if(this.form.invalid) {
      return;
    }
    const res = await this.coreSrv.createCinemaScreen(this.data.cinemaId, this.form.value);
    this.dialogRef.close(res);
  }

}

