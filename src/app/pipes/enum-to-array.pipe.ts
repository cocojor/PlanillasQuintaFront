import { Pipe, PipeTransform } from '@angular/core';
import { s } from '@angular/core/src/render3';

@Pipe({
    name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

    transform(data: Object): any {
        const array = Object.keys(data);
        const keys = array.slice(0, array.length / 2);
        const values = array.slice(array.length / 2, array.length);
        values.forEach(function(instance, index) {
            values[index] = instance.replace('_', ' ');
        });

        const collection = [];
        for (let index = 0; index < keys.length; index++) {
            collection.push({ key: keys[index], value: values[index] });
        }
        return collection;
    }
}
