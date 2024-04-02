import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "error",
  standalone: true,
  pure: true
})
export class ErrorPipe implements PipeTransform {

  private translations: {[key: string]: string} = {
    required: "Value is required",
    email: "Value should be a valid email",
  }

  constructor() {}

  transform(errorCode: string, ...args: any[]) {
    const res: string = this.translations[errorCode];
    return res || "";
  }
}