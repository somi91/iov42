import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { KeyValuePipe, NgFor } from '@angular/common';
import { ErrorPipe } from 'src/app/shared/pipes/error.pipe';
import { FirstPipe } from 'src/app/shared/pipes/first.pipe';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    MatInputModule,
    MatFormFieldModule,
    NgFor,
    KeyValuePipe,
    ErrorPipe,
    FirstPipe],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextInputComponent
    },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
  ],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() type = "text";
  @Input() label = "";
  @Input() control?: any | FormControl;

  public disabled = false;

  constructor() {
  }

  onChange = (value: string | number) => {
  };

  onTouched = () => {};

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string | number): void {
    // this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


}
