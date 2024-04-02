import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "first",
  standalone: true,
  pure: true
})
export class FirstPipe implements PipeTransform {

  transform(value: any[] | null, ...args: any[]) {
    if(Array.isArray(value) && value.length > 1) {
      return [value[0]];
    }
    return value;
  }
}