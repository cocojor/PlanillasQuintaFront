import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'splitFilename'
})
export class SplitFilenamePipe implements PipeTransform {

    transform(value: string): any {
        const splitted = value.split('|', 2);

        if (splitted.length < 2) {
            return value;
        }
        return splitted[1];
    }
}
